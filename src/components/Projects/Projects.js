import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="GAN-Based Face Rotation for Creative Portraits"
              description="I designed and developed a GAN-based Face Rotation model capable of rotating faces in artistic portraits while preserving unique styles like oil paintings and watercolors. The system uses a Kaggle-sourced dataset to train a GAN, enabling it to generate high-quality rotated portraits across various angles."
              ghLink="https://github.com/NamrathaKareddy/GAN-Based-Face-Rotation-for-Creative-Portraits"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Stock Prediction using LSTM and Decision Tree Regression"
              description="Developed a hybrid model combining Long Short-Term Memory (LSTM) networks and Decision Tree Regression for stock price prediction. The LSTM component captured sequential dependencies in stock data, while Decision Tree Regression provided interpretable rules for enhanced prediction accuracy. Conducted comprehensive data preprocessing, feature engineering, and hyperparameter tuning to refine model performance and deliver actionable insights for investors."
              ghLink="https://github.com/NamrathaKareddy/Predicting-Stocks-LSTM"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="3D Gaussian Splatting for Real-time Radiance Field Rendering"
              description="Designed an efficient real-time rendering system to visualize complex radiance fields using 3D Gaussian splatting techniques. Implemented core algorithms for sample projection, Gaussian splat generation, and optimization with GPU acceleration to enhance performance and visual quality. Collaborated with a team to develop a user-friendly interface for configuring parameters and evaluating the renderer through rigorous testing."
              ghLink="https://github.com/NamrathaKareddy/3DGaussianSplattingForRealTimeRadianceFieldRendering"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Airline passenger satisfaction"
              description="Developed a machine learning pipeline to predict airline passenger satisfaction using supervised algorithms including Logistic Regression, Decision Trees, SVM, and KNN. Preprocessed survey data of over 100,000 passengers, conducted feature engineering, and evaluated models on metrics like accuracy and AUC. Achieved the best results with KNN, demonstrating 91% accuracy, providing valuable insights for airlines to improve service quality."
              ghLink="https://github.com/NamrathaKareddy/Airline-passenger-satisfaction-using-ML"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/NamrathaKareddy/Face_And_Emotion_Detection-master" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
