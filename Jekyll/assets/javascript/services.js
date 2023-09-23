document.addEventListener("click", (event) => {
    var siteVitrine = document.getElementById("site-vitrine");
    var siteEcommerce = document.getElementById("site-ecommerce");
    var webApplication = document.getElementById("site-web-application");
    var identiteVisuelle = document.getElementById("identite-visuelle");
    if (event.target.matches("#title-site-vitrine")) {
        if (siteVitrine.style.display === "none") {
            siteVitrine.style.display = "flex";
          } else {
            siteVitrine.style.display = "flex";
          };
        closeElement(siteEcommerce);
        closeElement(webApplication);
        closeElement(identiteVisuelle);
        return;
    }
    if (event.target.matches("#title-site-ecommerce")) {
        toggleElement(siteEcommerce);
        closeElement(siteVitrine);
        closeElement(webApplication);
        closeElement(identiteVisuelle);
        return;
    }
    if (event.target.matches("#title-web-application")) {
        toggleElement(webApplication);
        closeElement(siteVitrine);
        closeElement(siteEcommerce);
        closeElement(identiteVisuelle);
        return;
    }
    if (event.target.matches("#title-identite-visuelle")) {
        if (identiteVisuelle.style.display === "none") {
            identiteVisuelle.style.display = "flex";
          } else {
            identiteVisuelle.style.display = "flex";
          };
        closeElement(siteVitrine);
        closeElement(siteEcommerce);
        closeElement(webApplication);
        return;
    }
});

function toggleElement(element) {
    if (element.style.display === "none") {
        element.style.display = "flex";
      }
       else {
        element.style.display = "none";
      }
  };

function closeElement(element) {
    if (element.style.display === "flex") {
        element.style.display = "none";
      }  else {
        element.style.display = "none";
      }
};
