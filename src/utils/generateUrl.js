// https://www.meetup.com/find/?suggested=true&source=EVENTS&keywords=sewing

const generateUrl = (input) => {
    let url = `https://www.meetup.com/find/?suggested=true&source=EVENTS&keywords=` + input
    return url;
}

export default generateUrl;
