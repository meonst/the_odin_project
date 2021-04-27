let return_contacts = function() {
    let contacts = document.createElement("div");
    contacts.setAttribute("id", "contacts");
    let phone_number = document.createElement("a");
    let address = document.createElement("a");
    let address_photo = document.createElement("img");
    
    phone_number.textContent = "Tel. 314-1592-6535";
    phone_number.setAttribute("href", "tel: 212-363-3200")
    
    address.textContent = "Address. New York, NY 10004, United States";
    address.setAttribute("href", "https://www.google.com/maps/dir//statue+of+liberty/");    

    address_photo.setAttribute("id", "address_photo")
    address_photo.setAttribute("src", "./images/address_photo.png")
    
    phone_number.classList.toggle("contact_section");
    address.classList.toggle("contact_section");
    contacts.appendChild(phone_number);
    contacts.appendChild(address);
    contacts.appendChild(address_photo);
    return contacts
}

export default return_contacts