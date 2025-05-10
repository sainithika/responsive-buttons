function toggleClass(element, oldClass, newClass) {
    if (element.className === oldClass) {
        element.className = newClass;
    } else {
        element.className = oldClass;
    }
}

function updateChildClasses(element, append) {
    element.childNodes.forEach((child) => {
        if (child.nodeType === 1) { 
            const currentClass = child.className;
            if (currentClass) {
                if (append) {
                    child.className = currentClass + "1";
                } else {
                    child.className = currentClass.replace(/1$/, "");
                }
            }
            updateChildClasses(child, append);
        }
    });
}

document.querySelector(".rectangle").addEventListener("click", function (event) {
    const rectangle = document.querySelector(".rectangle");
    const rectangle1 = document.querySelector(".rectangle1");

    if (rectangle.className === "rectangle") {
        toggleClass(rectangle, "rectangle", "rectangle1");
        updateChildClasses(rectangle, true); 
        rectangle1.className = "rectangle"; 
        updateChildClasses(rectangle1, false); 
    }

    event.stopPropagation();
});


document.querySelector(".rectangle1").addEventListener("click", function (event) {
    const rectangle = document.querySelector(".rectangle");
    const rectangle1 = document.querySelector(".rectangle1");

    if (rectangle1.className === "rectangle1") {
        toggleClass(rectangle1, "rectangle1", "rectangle");
        updateChildClasses(rectangle1, false); 
        rectangle.className = "rectangle1"; 
        updateChildClasses(rectangle, true);
    }

    event.stopPropagation();
});