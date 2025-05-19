import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import SEO from "../components/SEO";
import Header from "../partials/header/Header";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../container/Footer/Footer";

const NotFound = () => {
  return (
    <React.Fragment>
      <SEO
        title="Anthem Infotech - Oops! Page Not Found"
        description="The page you are looking for doesn't exist or has been moved. Please check the URL or return to our homepage for more information."
        ogtitle="Anthem Infotech - Oops! Page Not Found"
        ogdescription="The page you are looking for doesn't exist or has been moved. Please check the URL or return to our homepage for more information."
      />

      <Header />
      <div className="section section-padding-top vh-100 d-flex align-items-center">
        <Container className="d-flex align-items-center justify-content-center text-center">
          <Row className="w-100">
            <Col md={8} lg={6} className="mx-auto">
              <div className="border-0 shadow-lg p-5 bg-light rounded">
                <h1 className="display-1 text-danger mb-4">404</h1>
                <h2 className="mb-4">Oops! Page Not Found</h2>
                <p className="lead text-muted">
                  It seems we can’t find the page you’re looking for. Perhaps it
                  was moved or deleted.
                </p>
                <Button variant="primary" href={process.env.PUBLIC_URL + "/"}>
                  Go to Home
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default NotFound;
