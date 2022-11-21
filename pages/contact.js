
import { useContext } from "react";
import AppContext from "../AppContext";
import { Container } from "react-bootstrap";
import Navigation from "../components/Navigation";

export default function About() {
  const value = useContext(AppContext);
  let {contactTitle, emailLabel, phoneLabel } = value.state.languages;

  return (
    <>
      <Navigation />
      <Container className="page">
        <h2>{contactTitle}</h2>
        <div>
          <li>{`${emailLabel}: hi@example.com`}</li>
          <li>{`${phoneLabel}: +010112345`}</li>
        </div>
      </Container>
    </>
  );
}