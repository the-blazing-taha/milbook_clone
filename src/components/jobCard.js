import { Card, Button, Badge, Container, Row, Col } from "react-bootstrap";

function JobCard({ jobs }) {
  return (
    <Container>
      <Row className="g-4">
        {jobs.map((job, index) => (
          <Col key={index} md={4}>
            <Card
              style={{
                height: "30rem",
                borderRadius: "15px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.8)",
                padding: "10px",
                backgroundColor: "transparent",
              }}
            >
              <Card.Img
                variant="top"
                src={job.image}
                style={{
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  width: "100%",
                }}
              />
              <Card.Body
                className="d-flex flex-column"
                style={{ height: "100%" }}
              >
                <Card.Title className="mb-2 fw-bold">{job.title}</Card.Title>
                <h6 className="text-muted mb-3">
                  at <span className="text-dark">{job.firm}</span>
                </h6>

                <Badge
                  fi
                  bg="primary"
                  className="mb-3"
                  style={{ fontSize: "0.9rem" ,width: "fit-content"}}
                >
                  {job.mode}
                </Badge>

                <Card.Text style={{ fontSize: "0.9rem" }}>
                  {job.description}
                </Card.Text>
                <div className="mb-3 d-flex flex-wrap gap-2 mt-auto">
                  Skills:
                    {job.skills.map((skill, i) => (
                      <Badge key={i} bg="secondary" style={{ fontSize: "0.75rem" }}>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                <div className="mt-auto">
                  <Button variant="dark" className="w-100">
                    Apply Now
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default JobCard;
