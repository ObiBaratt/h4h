// https://www.meetup.com/find/?suggested=true&source=EVENTS&keywords=sewing

const generateUrl = (input) => {
    let url = `https://www.meetup.com/find/?suggested=true&source=EVENTS&keywords=` + input
    console.log(`Do some stuff with ${url}`);
}

export default generateUrl;
