document.addEventListener("DOMContentLoaded", function () {

    const magazineElement = document.getElementById("magazine");
    const wrapper = document.getElementById("wrapper");

    const pageFlip = new St.PageFlip(magazineElement, {
        width: 450,
        height: 600,
        showCover: true, 
        size: "fixed",
        drawShadow: true,
        flippingTime: 800,
        usePortrait: false,
        startPage: 0,
        autoSize: false, // قفلنا الـ autoSize عشان نتحكم في الأبعاد بنفسنا يدوياً ونمنع العته
        clickEventForward: false,
        useMouseEvents: true
    });

    // تحميل الصفحات
    pageFlip.loadFromHTML(document.querySelectorAll(".page"));

    // الراقص السحري لضبط عرض المجلة ومنع المساحات البيضاء الجانبية 🪄🕺
    pageFlip.on('flip', (e) => {
        const currentPage = e.data;
        const totalPages = pageFlip.getPageCount();

        if (currentPage === 0 || currentPage === totalPages - 1) {
            wrapper.style.width = "450px"; // حجم صفحة واحدة للغلاف الأول والأخير
        } else {
            wrapper.style.width = "900px"; // حجم صفحتين يمين وشمال للداخل
        }
    });
});