function createAndAppend(element, parent, properties)
{
    let newElement = document.createElement(element);

    for (key in properties)
    {
        if (key !== "textContent")
            { newElement.setAttribute(key, properties[key]); }
        else
            { newElement.textContent = properties[key]; }
    }

    parent.appendChild(newElement);

    return newElement;
}