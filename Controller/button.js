function scrollToTop() {
    let position = window.pageYOffset; 
    const step = 70; 

    function scrollStep() {
        if (position > 0) {
            position -= step; 
            window.scrollTo(0, position); 
            requestAnimationFrame(scrollStep); 
        }
    }

    requestAnimationFrame(scrollStep); 
}