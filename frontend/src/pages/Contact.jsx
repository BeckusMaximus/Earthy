import "../pages/style/contact.css";
import {
  APIProvider,
  Map,
  useAdvancedMarkerRef,
  AdvancedMarker,
} from "@vis.gl/react-google-maps";
const Contact = () => {
  const [markerRef] = useAdvancedMarkerRef();
  return (
    <>
      <div id="mainContact">
        <h2>Contact Us</h2>
        <p id="contactPara">
          We&#39;d love to hear from you! Whether you have a question about our
          products, need assistance with an order, or just want to share your
          feedback, our team is here to help.
        </p>
        <div id="contactInfo">
          <h4>Contact information</h4>
          <p>
            <span>Address:</span> Earthy 123 Eco Way Green City, FL 12345 USA
          </p>
          <p>
            <span>Phone:</span>+1 (555) 123-4567
          </p>
          <p>
            <span>Email:</span>support@earthy.com
          </p>
          <h4>Business Hours</h4>
          <ul>
            <li>Monday to Friday: 9:00 AM - 5:00 PM</li>
            <li>Saturday: 10:00 AM - 2:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
        <APIProvider apiKey={"AIzaSyBnKmR2FrktUT54fnBYkikohna-NDu4oVE"}>
          <Map
            style={{ width: "50vw", height: "50vh" }}
            defaultCenter={{ lat: 59.31554, lng: 18.02334 }}
            defaultZoom={5}
            gestureHandling={"greedy"}
            disableDefaultUI={true}
          />
          <AdvancedMarker
            ref={markerRef}
            position={{ lat: 59.31554, lng: 18.02334 }}
          />
        </APIProvider>
      </div>
    </>
  );
};
export default Contact;
