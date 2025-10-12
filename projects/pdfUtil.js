// Loaded via <script> tag, create shortcut to access PDF.js exports.
var pdfjsLib = window['pdfjsLib'];

// The workerSrc property shall be specified.
pdfjsLib.GlobalWorkerOptions.workerSrc = '../mod/pdfjs/build/pdf.worker.mjs';

function renderPage(doc, pagenum, canvas, text, renderscale=2) {
    // pageRendering = true;
    let ctx = canvas.getContext('2d');
    // Using promise to fetch the page
    doc.getPage(pagenum).then(function(page) {
        var viewport = page.getViewport({scale: renderscale});
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // Render PDF page into canvas context
        var renderContext = {
            canvasContext: ctx,
            viewport: viewport
        };

        var renderTask = page.render(renderContext);

        // Wait for rendering to finish
        renderTask.promise.then(function() {
            // pageRendering = false;
            // if (pageNumPending !== null) {
            //     // New page rendering is pending
            //     renderPage(pageNumPending);
            //     pageNumPending = null;
            // }
        }).then(function() {

            // textLayer.style.left = canvas.offsetLeft + 'px';
            // textLayer.style.top = canvas.offsetTop + 'px';
            // textLayer.style.height = canvas.offsetHeight + 'px';
            // textLayer.style.width = canvas.offsetWidth + 'px';

            const tl = new pdfjsLib.TextLayer({
	            textContentSource: page.streamTextContent(),
                viewport: viewport,
                container: text,
            });
            tl.render();

            text.style.aspectRatio = viewport.width + "/" + viewport.height;
            text.style.height = null;
            text.style.width = null;
            text.style.setProperty("--render-scale", renderscale);
            text.style.setProperty("--orig-width", viewport.width);
        });
    });

}

