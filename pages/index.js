import Head from "next/head";
import theProjects from "../data/projects-data";
import Link from "next/link";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Badge,
  Card,
  Form,
  Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/pages/home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home ~ Ishani Kathuria</title>
      </Head>

      {/* jumbotron */}

      <Jumbotron fluid className={styles.jumbotron}>
        <Container className={styles.header}>
          <h1>
            <b>Ishani</b> Kathuria.
          </h1>
        </Container>

        <div>
          <svg
            className={styles.waves}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className={styles.parallax}>
              <use
                xlinkHref="#gentle-wave"
                x={48}
                y={0}
                fill="rgba(255, 192, 159, 0.7"
              />
              <use
                xlinkHref="#gentle-wave"
                x={48}
                y={3}
                fill="rgba(255, 192, 159, 0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x={48}
                y={5}
                fill="rgba(255, 192, 159, 0.3)"
              />
              <use
                xlinkHref="#gentle-wave"
                x={48}
                y={7}
                fill="rgb(255, 192, 159)"
              />
            </g>
          </svg>
        </div>

        <div className={styles.bottomContent}>
          <FontAwesomeIcon
            icon={["fas", "arrow-down"]}
            className={styles.icon}
            size="2x"
          />
        </div>
      </Jumbotron>

      {/* --- MAIN --- */}

      <div className={styles.main}>
        {/* about */}

        <section className={styles.mainRow + " " + styles.about} id="about">
          <h2>
            मैं
            <span style={{ color: "blue" }}>Me</span>
            Moi.
          </h2>

          <Container>
            <Row>
              <Col lg={6} className={styles.me}></Col>
              <Col lg={6} className={styles.description}>
                <h3>Ishani Kathuria</h3>
                <h4>Web Developer & Artist</h4>
                <p>
                  Owner of this tiny little part of the internet I call home.
                  I’m really bad at talking about myself but I’ll give you some
                  insight into who I like to think I am. I’m a typical introvert
                  who loves art and books. I also play 2.5 instruments, I’ll
                  leave you guessing as to what those are :)
                </p>

                <p>
                  I’m passionate about drawing and am also keen on photography
                  and writing. I assume my creative imaginative side stems from
                  my deep-seated addiction to books, television, and movies.
                  Everything seems possible in those worlds, from entering
                  dreams within dreams to green multiverse portal guns.
                </p>

                <p>
                  But that doesn’t mean our real world isn’t interesting. We
                  have plenty of things that one might not believe unless they
                  see it with their own two eyes. Guessing what I’m talking
                  about? Stick around to find out.
                </p>

                <p>
                  What is this website about, you ask? About sharing and
                  improving. Be it the technical side of this website or the art
                  and photography side, the internet has increased the limits of
                  every domain with the ability to share and communicate with
                  people everywhere in the world.
                </p>

                <p>
                  On the other hand, I am sharing my thoughts and opinions and
                  ideas through writing in hope of improvement through feedback
                  from readers. Or simply to connect with someone, who feels or
                  thinks the same as me, without the barrier of distance.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        {/* projects */}

        <section
          className={styles.mainRow + " " + styles.projects}
          id="projects"
        >
          <h2>Latest Projects.</h2>
          <Container>
            <Row className={styles.projectsRow}>
              {theProjects
                .slice(0, 3)
                .map(({ slug, img, title, date, excerpt }) => (
                  <Col md={4} className={styles.cardContainer}>
                    <div
                      className={styles.card}
                      style={{ "--image": `url(${img})` }}
                    >
                      <Link href={`/projects/${slug}`}>
                        <a>
                          <div className={styles.cardDisplay}>
                            <h3 style={{ fontSize: "2rem" }}>{title}</h3>

                            <h4 style={{ fontSize: "1.3rem" }}>{date}</h4>
                          </div>

                          <div className={styles.cardHover}>
                            <h3 className={styles.projectTitle}>{title}</h3>
                            <p>{excerpt}</p>
                            <p style={{ color: "#77FF9B", fontWeight: "bold" }}>
                              Click to see project
                            </p>
                          </div>
                        </a>
                      </Link>

                      <div className={styles.cardBorder}></div>
                    </div>
                  </Col>
                ))}
            </Row>

            <Link href="/projects">
              <a className={styles.more}>
                <svg
                  height="250"
                  viewBox="45 60 400 320"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#000"
                    d="M 90 210 C 90 180 90 150 150 150 C 150 150 180 150 180 150 C 180 150 300 150 300 150 C 300 150 330 150 330 150 C 390 150 390 180 390 210 C 390 240 390 270 330 270 C 330 270 300 270 300 270 C 300 270 180 270 180 270 C 180 270 150 270 150 270 C 90 270 90 240 90 210"
                    mask="url(#knockout-text)"
                  ></path>
                  <mask id="knockout-text">
                    <rect width="100%" height="100%" fill="#fff" x="0" y="0" />
                    <text x="110" y="227" fill="#000">
                      all projects {"->"}
                    </text>
                  </mask>
                </svg>
              </a>
            </Link>
          </Container>
        </section>

        {/* skills */}

        <section className={styles.mainRow + " " + styles.skills} id="skills">
          <h2>Skills.</h2>

          <Container style={{ alignItems: "center" }}>
            <Row>
              <Col lg={4} className={styles.skillCol}>
                <h3>front end</h3>

                <hr />

                <h4>
                  <FontAwesomeIcon
                    className={styles.skillIcon + " " + styles.html}
                    icon={["fab", "html5"]}
                  />
                  <Badge className={styles.btn + " " + styles.html}>html</Badge>
                </h4>

                <h4>
                  <FontAwesomeIcon
                    className={styles.skillIcon + " " + styles.css}
                    icon={["fab", "css3-alt"]}
                  />
                  <Badge className={styles.btn + " " + styles.css}>css</Badge>
                </h4>

                <h4>
                  <FontAwesomeIcon
                    className={styles.skillIcon + " " + styles.bootstrap}
                    icon={["fab", "bootstrap"]}
                  />
                  <Badge className={styles.btn + " " + styles.bootstrap}>
                    bootstrap
                  </Badge>
                </h4>

                <h4>
                  <FontAwesomeIcon
                    className={styles.skillIcon + " " + styles.javascript}
                    icon={["fab", "js"]}
                  />
                  <Badge className={styles.btn + " " + styles.javascript}>
                    javascript
                  </Badge>
                </h4>

                <h4>
                  <FontAwesomeIcon
                    className={styles.skillIcon + " " + styles.npm}
                    icon={["fab", "npm"]}
                  />
                  <Badge className={styles.btn + " " + styles.npm}>npm</Badge>
                </h4>
              </Col>

              <Col lg={4} className={styles.skillCol}>
                <h3>back end</h3>

                <hr />

                <h4>
                  <FontAwesomeIcon
                    className={styles.skillIcon + " " + styles.python}
                    icon={["fab", "python"]}
                  />
                  <Badge className={styles.btn + " " + styles.python}>
                    <a>python</a>
                  </Badge>
                </h4>

                <h4>
                  <svg
                    className={styles.skillIcon}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    focusable="false"
                    width="4rem"
                    height="4rem"
                    style={{
                      msTransform: "rotate(360deg)",
                      WebkitTransform: "rotate(360deg)",
                      transform: "rotate(360deg)",
                    }}
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 256 326"
                  >
                    <g fill="#2BA977">
                      <path d="M114.784 0h53.278v244.191c-27.29 5.162-47.38 7.193-69.117 7.193C33.873 251.316 0 222.245 0 166.412c0-53.795 35.93-88.708 91.608-88.708c8.64 0 15.222.68 23.176 2.717V0zm1.867 124.427c-6.24-2.038-11.382-2.717-17.965-2.717c-26.947 0-42.512 16.437-42.512 45.243c0 28.046 14.88 43.532 42.17 43.532c5.896 0 10.696-.332 18.307-1.351v-84.707z" />
                      <path d="M255.187 84.26v122.263c0 42.105-3.154 62.353-12.411 79.81c-8.64 16.783-20.022 27.366-43.541 39.055l-49.438-23.297c23.519-10.93 34.901-20.588 42.17-35.327c7.61-15.072 10.01-32.529 10.01-78.445V84.261h53.21z" />
                      <path d="M196.608 0h53.278v54.135h-53.278V0z" />
                    </g>
                  </svg>

                  <Badge className={styles.btn + " " + styles.django}>
                    django
                  </Badge>
                </h4>

                <h4>
                  <FontAwesomeIcon
                    className={styles.skillIcon + " " + styles.react}
                    icon={["fab", "react"]}
                  />
                  <Badge className={styles.btn + " " + styles.react}>
                    react
                  </Badge>
                </h4>

                <h4>
                  <svg
                    className={styles.skillIcon}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    focusable="false"
                    width="4rem"
                    height="4rem"
                    style={{
                      msTransform: "rotate(360deg)",
                      WebkitTransform: "rotate(360deg)",
                      transform: "rotate(360deg)",
                    }}
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 512 309"
                  >
                    <path
                      d="M120.81 80.561h96.568v7.676h-87.716v57.767h82.486v7.675h-82.486v63.423h88.722v7.675H120.81V80.561zm105.22 0h10.26l45.467 63.423L328.23 80.56L391.441 0l-103.85 150.65l53.515 74.127h-10.663l-48.686-67.462l-48.888 67.462h-10.461l53.917-74.128l-50.296-70.088zm118.898 7.676V80.56h110.048v7.676h-50.699v136.54h-8.852V88.237h-50.497zM0 80.56h11.065l152.58 228.323l-63.053-84.107L9.254 91.468l-.402 133.31H0V80.56zm454.084 134.224c-1.809 0-3.165-1.4-3.165-3.212c0-1.81 1.356-3.212 3.165-3.212c1.83 0 3.165 1.401 3.165 3.212c0 1.811-1.335 3.212-3.165 3.212zm8.698-8.45h4.737c.064 2.565 1.937 4.29 4.693 4.29c3.079 0 4.823-1.854 4.823-5.325v-21.99h4.823v22.011c0 6.252-3.617 9.853-9.603 9.853c-5.62 0-9.473-3.493-9.473-8.84zm25.384-.28h4.78c.409 2.953 3.294 4.828 7.45 4.828c3.875 0 6.717-2.005 6.717-4.764c0-2.371-1.809-3.794-5.921-4.764l-4.005-.97c-5.62-1.316-8.181-4.032-8.181-8.602c0-5.54 4.521-9.227 11.303-9.227c6.308 0 10.916 3.686 11.196 8.925h-4.694c-.452-2.867-2.95-4.657-6.567-4.657c-3.81 0-6.35 1.833-6.35 4.635c0 2.22 1.635 3.493 5.683 4.441l3.423.841c6.373 1.488 9 4.075 9 8.753c0 5.95-4.607 9.68-11.97 9.68c-6.89 0-11.52-3.558-11.864-9.12z"
                      fill="#000"
                    />
                  </svg>
                  <Badge className={styles.btn + " " + styles.next}>
                    next.js
                  </Badge>
                </h4>

                <h4>
                  <svg
                    className={styles.skillIcon}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    focusable="false"
                    width="4rem"
                    height="4rem"
                    style={{
                      msTransform: "rotate(360deg)",
                      WebkitTransform: "rotate(360deg)",
                      transform: "rotate(360deg)",
                    }}
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 256 264"
                  >
                    <path
                      d="M255.008 158.086c-1.535-4.649-5.556-7.887-10.756-8.664c-2.452-.366-5.26-.21-8.583.475c-5.792 1.195-10.089 1.65-13.225 1.738c11.837-19.985 21.462-42.775 27.003-64.228c8.96-34.689 4.172-50.492-1.423-57.64C233.217 10.847 211.614.683 185.552.372c-13.903-.17-26.108 2.575-32.475 4.549c-5.928-1.046-12.302-1.63-18.99-1.738c-12.537-.2-23.614 2.533-33.079 8.15c-5.24-1.772-13.65-4.27-23.362-5.864c-22.842-3.75-41.252-.828-54.718 8.685C6.622 25.672-.937 45.684.461 73.634c.444 8.874 5.408 35.874 13.224 61.48c4.492 14.718 9.282 26.94 14.237 36.33c7.027 13.315 14.546 21.156 22.987 23.972c4.731 1.576 13.327 2.68 22.368-4.85c1.146 1.388 2.675 2.767 4.704 4.048c2.577 1.625 5.728 2.953 8.875 3.74c11.341 2.835 21.964 2.126 31.027-1.848c.056 1.612.099 3.152.135 4.482c.06 2.157.12 4.272.199 6.25c.537 13.374 1.447 23.773 4.143 31.049c.148.4.347 1.01.557 1.657c1.345 4.118 3.594 11.012 9.316 16.411c5.925 5.593 13.092 7.308 19.656 7.308c3.292 0 6.433-.432 9.188-1.022c9.82-2.105 20.973-5.311 29.041-16.799c7.628-10.86 11.336-27.217 12.007-52.99c.087-.729.167-1.425.244-2.088l.16-1.362l1.797.158l.463.031c10.002.456 22.232-1.665 29.743-5.154c5.935-2.754 24.954-12.795 20.476-26.351"
                      fill="#000"
                    />
                    <path
                      d="M237.906 160.722c-29.74 6.135-31.785-3.934-31.785-3.934c31.4-46.593 44.527-105.736 33.2-120.211c-30.904-39.485-84.399-20.811-85.292-20.327l-.287.052c-5.876-1.22-12.451-1.946-19.842-2.067c-13.456-.22-23.664 3.528-31.41 9.402c0 0-95.43-39.314-90.991 49.444c.944 18.882 27.064 142.873 58.218 105.422c11.387-13.695 22.39-25.274 22.39-25.274c5.464 3.63 12.006 5.482 18.864 4.817l.533-.452c-.166 1.7-.09 3.363.213 5.332c-8.026 8.967-5.667 10.541-21.711 13.844c-16.235 3.346-6.698 9.302-.471 10.86c7.549 1.887 25.013 4.561 36.813-11.958l-.47 1.885c3.144 2.519 5.352 16.383 4.982 28.952c-.37 12.568-.617 21.197 1.86 27.937c2.479 6.74 4.948 21.905 26.04 17.386c17.623-3.777 26.756-13.564 28.027-29.89c.901-11.606 2.942-9.89 3.07-20.267l1.637-4.912c1.887-15.733.3-20.809 11.157-18.448l2.64.232c7.99.363 18.45-1.286 24.589-4.139c13.218-6.134 21.058-16.377 8.024-13.686h.002"
                      fill="#336791"
                    />
                    <path
                      d="M108.076 81.525c-2.68-.373-5.107-.028-6.335.902c-.69.523-.904 1.129-.962 1.546c-.154 1.105.62 2.327 1.096 2.957c1.346 1.784 3.312 3.01 5.258 3.28c.282.04.563.058.842.058c3.245 0 6.196-2.527 6.456-4.392c.325-2.336-3.066-3.893-6.355-4.35"
                      fill="#FFF"
                    />
                    <path
                      d="M196.86 81.599c-.256-1.831-3.514-2.353-6.606-1.923c-3.088.43-6.082 1.824-5.832 3.659c.2 1.427 2.777 3.863 5.827 3.863c.258 0 .518-.017.78-.054c2.036-.282 3.53-1.575 4.24-2.32c1.08-1.136 1.706-2.402 1.591-3.225"
                      fill="#FFF"
                    />
                    <path
                      d="M247.802 160.025c-1.134-3.429-4.784-4.532-10.848-3.28c-18.005 3.716-24.453 1.142-26.57-.417c13.995-21.32 25.508-47.092 31.719-71.137c2.942-11.39 4.567-21.968 4.7-30.59c.147-9.463-1.465-16.417-4.789-20.665c-13.402-17.125-33.072-26.311-56.882-26.563c-16.369-.184-30.199 4.005-32.88 5.183c-5.646-1.404-11.801-2.266-18.502-2.376c-12.288-.199-22.91 2.743-31.704 8.74c-3.82-1.422-13.692-4.811-25.765-6.756c-20.872-3.36-37.458-.814-49.294 7.571c-14.123 10.006-20.643 27.892-19.38 53.16c.425 8.501 5.269 34.653 12.913 59.698c10.062 32.964 21 51.625 32.508 55.464c1.347.449 2.9.763 4.613.763c4.198 0 9.345-1.892 14.7-8.33a529.832 529.832 0 0 1 20.261-22.926c4.524 2.428 9.494 3.784 14.577 3.92c.01.133.023.266.035.398a117.66 117.66 0 0 0-2.57 3.175c-3.522 4.471-4.255 5.402-15.592 7.736c-3.225.666-11.79 2.431-11.916 8.435c-.136 6.56 10.125 9.315 11.294 9.607c4.074 1.02 7.999 1.523 11.742 1.523c9.103 0 17.114-2.992 23.516-8.781c-.197 23.386.778 46.43 3.586 53.451c2.3 5.748 7.918 19.795 25.664 19.794c2.604 0 5.47-.303 8.623-.979c18.521-3.97 26.564-12.156 29.675-30.203c1.665-9.645 4.522-32.676 5.866-45.03c2.836.885 6.487 1.29 10.434 1.289c8.232 0 17.731-1.749 23.688-4.514c6.692-3.108 18.768-10.734 16.578-17.36zm-44.106-83.48c-.061 3.647-.563 6.958-1.095 10.414c-.573 3.717-1.165 7.56-1.314 12.225c-.147 4.54.42 9.26.968 13.825c1.108 9.22 2.245 18.712-2.156 28.078a36.508 36.508 0 0 1-1.95-4.009c-.547-1.326-1.735-3.456-3.38-6.404c-6.399-11.476-21.384-38.35-13.713-49.316c2.285-3.264 8.084-6.62 22.64-4.813zm-17.644-61.787c21.334.471 38.21 8.452 50.158 23.72c9.164 11.711-.927 64.998-30.14 110.969a171.33 171.33 0 0 0-.886-1.117l-.37-.462c7.549-12.467 6.073-24.802 4.759-35.738c-.54-4.488-1.05-8.727-.92-12.709c.134-4.22.692-7.84 1.232-11.34c.663-4.313 1.338-8.776 1.152-14.037c.139-.552.195-1.204.122-1.978c-.475-5.045-6.235-20.144-17.975-33.81c-6.422-7.475-15.787-15.84-28.574-21.482c5.5-1.14 13.021-2.203 21.442-2.016zM66.674 175.778c-5.9 7.094-9.974 5.734-11.314 5.288c-8.73-2.912-18.86-21.364-27.791-50.624c-7.728-25.318-12.244-50.777-12.602-57.916c-1.128-22.578 4.345-38.313 16.268-46.769c19.404-13.76 51.306-5.524 64.125-1.347c-.184.182-.376.352-.558.537c-21.036 21.244-20.537 57.54-20.485 59.759c-.002.856.07 2.068.168 3.735c.362 6.105 1.036 17.467-.764 30.334c-1.672 11.957 2.014 23.66 10.111 32.109a36.275 36.275 0 0 0 2.617 2.468c-3.604 3.86-11.437 12.396-19.775 22.426zm22.479-29.993c-6.526-6.81-9.49-16.282-8.133-25.99c1.9-13.592 1.199-25.43.822-31.79c-.053-.89-.1-1.67-.127-2.285c3.073-2.725 17.314-10.355 27.47-8.028c4.634 1.061 7.458 4.217 8.632 9.645c6.076 28.103.804 39.816-3.432 49.229c-.873 1.939-1.698 3.772-2.402 5.668l-.546 1.466c-1.382 3.706-2.668 7.152-3.465 10.424c-6.938-.02-13.687-2.984-18.819-8.34zm1.065 37.9c-2.026-.506-3.848-1.385-4.917-2.114c.893-.42 2.482-.992 5.238-1.56c13.337-2.745 15.397-4.683 19.895-10.394c1.031-1.31 2.2-2.794 3.819-4.602l.002-.002c2.411-2.7 3.514-2.242 5.514-1.412c1.621.67 3.2 2.702 3.84 4.938c.303 1.056.643 3.06-.47 4.62c-9.396 13.156-23.088 12.987-32.921 10.526zm69.799 64.952c-16.316 3.496-22.093-4.829-25.9-14.346c-2.457-6.144-3.665-33.85-2.808-64.447c.011-.407-.047-.8-.159-1.17a15.444 15.444 0 0 0-.456-2.162c-1.274-4.452-4.379-8.176-8.104-9.72c-1.48-.613-4.196-1.738-7.46-.903c.696-2.868 1.903-6.107 3.212-9.614l.549-1.475c.618-1.663 1.394-3.386 2.214-5.21c4.433-9.848 10.504-23.337 3.915-53.81c-2.468-11.414-10.71-16.988-23.204-15.693c-7.49.775-14.343 3.797-17.761 5.53c-.735.372-1.407.732-2.035 1.082c.954-11.5 4.558-32.992 18.04-46.59c8.489-8.56 19.794-12.788 33.568-12.56c27.14.444 44.544 14.372 54.366 25.979c8.464 10.001 13.047 20.076 14.876 25.51c-13.755-1.399-23.11 1.316-27.852 8.096c-10.317 14.748 5.644 43.372 13.315 57.129c1.407 2.521 2.621 4.7 3.003 5.626c2.498 6.054 5.732 10.096 8.093 13.046c.724.904 1.426 1.781 1.96 2.547c-4.166 1.201-11.649 3.976-10.967 17.847c-.55 6.96-4.461 39.546-6.448 51.059c-2.623 15.21-8.22 20.875-23.957 24.25zm68.104-77.936c-4.26 1.977-11.389 3.46-18.161 3.779c-7.48.35-11.288-.838-12.184-1.569c-.42-8.644 2.797-9.547 6.202-10.503c.535-.15 1.057-.297 1.561-.473c.313.255.656.508 1.032.756c6.012 3.968 16.735 4.396 31.874 1.271l.166-.033c-2.042 1.909-5.536 4.471-10.49 6.772z"
                      fill="#FFF"
                    />
                  </svg>

                  <Badge className={styles.btn + " " + styles.sql}>
                    postgreSQL
                  </Badge>
                </h4>
              </Col>

              <Col lg={4} className={styles.skillCol}>
                <h3>tools</h3>

                <hr />

                <h4>
                  <FontAwesomeIcon
                    className={styles.skillIcon + " " + styles.git}
                    icon={["fab", "git-alt"]}
                  />
                  <Badge className={styles.btn + " " + styles.git}>git</Badge>
                </h4>

                <h4>
                  <FontAwesomeIcon
                    className={styles.skillIcon + " " + styles.github}
                    icon={["fab", "github"]}
                  />
                  <Badge className={styles.btn + " " + styles.github}>
                    github
                  </Badge>
                </h4>

                <h4>
                  <svg
                    className={styles.skillIcon}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    focusable="false"
                    width="4rem"
                    height="4rem"
                    style={{
                      msTransform: "rotate(360deg)",
                      WebkitTransform: "rotate(360deg)",
                      transform: "rotate(360deg)",
                    }}
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M29.01 5.03l-5.766-2.776a1.742 1.742 0 0 0-1.989.338L2.38 19.8a1.166 1.166 0 0 0-.08 1.647c.025.027.05.053.077.077l1.541 1.4a1.165 1.165 0 0 0 1.489.066L28.142 5.75A1.158 1.158 0 0 1 30 6.672v-.067a1.748 1.748 0 0 0-.99-1.575z"
                      fill="#0065a9"
                    />
                    <path
                      d="M29.01 26.97l-5.766 2.777a1.745 1.745 0 0 1-1.989-.338L2.38 12.2a1.166 1.166 0 0 1-.08-1.647c.025-.027.05-.053.077-.077l1.541-1.4A1.165 1.165 0 0 1 5.41 9.01l22.732 17.24A1.158 1.158 0 0 0 30 25.328v.072a1.749 1.749 0 0 1-.99 1.57z"
                      fill="#007acc"
                    />
                    <path
                      d="M23.244 29.747a1.745 1.745 0 0 1-1.989-.338A1.025 1.025 0 0 0 23 28.684V3.316a1.024 1.024 0 0 0-1.749-.724a1.744 1.744 0 0 1 1.989-.339l5.765 2.772A1.748 1.748 0 0 1 30 6.6v18.8a1.748 1.748 0 0 1-.991 1.576z"
                      fill="#1f9cf0"
                    />
                  </svg>
                  <Badge className={styles.btn + " " + styles.vs}>
                    vs code
                  </Badge>
                </h4>
              </Col>
            </Row>
          </Container>
        </section>

        {/* art */}

        <section className={styles.mainRow + " " + styles.art} id="art">
          <h2>My Creative Ambitions.</h2>

          <Container fluid>
            <Row className={styles.artRow}>
              <div
                className={styles.inner}
                style={{
                  "--image": "url(/pages/blog.jpg)",
                  "--color": "#FABC2A",
                }}
              >
                <Link href="/">
                  <a>
                    <h3 className={styles.title}>check out my blog</h3>
                  </a>
                </Link>
              </div>

              <div
                className={styles.inner}
                style={{
                  "--image": "url(/pages/photo.jpg)",
                  "--color": "#BD93BD",
                }}
              >
                <Link href="/">
                  <a>
                    <h3 className={styles.title}>check out my gallery</h3>
                  </a>
                </Link>
              </div>
            </Row>
          </Container>
        </section>

        {/* contact */}

        <section className={styles.mainRow + " " + styles.contact} id="contact">
          <h2>Contact Me.</h2>

          <div className={styles.imgContact}></div>

          <div className={styles.colorContact}></div>

          <Container className={styles.containerContact}>
            <Row>
              <Col md={8}>
                <Card className={styles.cardContact}>
                  <Card.Body>
                    <Form>
                      <Form.Group controlId="formGroupName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          className={styles.formField}
                          placeholder="John Doe"
                        />
                      </Form.Group>

                      <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          className={styles.formField}
                          type="email"
                          placeholder="john@doe.com"
                        />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Your message</Form.Label>
                        <Form.Control
                          className={styles.formField}
                          as="textarea"
                          rows={3}
                          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        />
                      </Form.Group>

                      <Button type="submit">Launch Missile!</Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}

// <Card.Footer className={styles.social}>
//   <div className={styles.socialList}>
//     <ul>
//       <li className={styles.socialLink}>
//         <a
//           href="https://github.com/ikathuria"
//           target="_blank"
//         >
//           <FontAwesomeIcon
//             icon={["fab", "github"]}
//             className={styles.iconSocial}
//           />
//         </a>
//       </li>

//       <li className={styles.socialLink}>
//         <a
//           href="https://www.linkedin.com/in/ishani-kathuria/"
//           target="_blank"
//         >
//           <FontAwesomeIcon
//             icon={["fab", "linkedin-in"]}
//             className={styles.iconSocial}
//           />
//         </a>
//       </li>

//       <li className={styles.socialLink}>
//         <a
//           href="https://www.instagram.com/ii.meraki.ii/?hl=en"
//           target="_blank"
//         >
//           <FontAwesomeIcon
//             icon={["fab", "instagram"]}
//             className={styles.iconSocial}
//           />
//         </a>
//       </li>
//     </ul>
//   </div>
// </Card.Footer>;