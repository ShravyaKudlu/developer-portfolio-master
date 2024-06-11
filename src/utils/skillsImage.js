import html from "../assets/svg/skills/html.svg";
import docker from "../assets/svg/skills/docker.svg";
import css from "../assets/svg/skills/css.svg";
import javascript from "../assets/svg/skills/javascript.svg";
import nextJS from "../assets/svg/skills/nextJS.svg";
import react from "../assets/svg/skills/react.svg";
import typescript from "../assets/svg/skills/typescript.svg";
import bootstrap from "../assets/svg/skills/bootstrap.svg";
import mongoDB from "../assets/svg/skills/mongoDB.svg";
import mysql from "../assets/svg/skills/mysql.svg";
import postgresql from "../assets/svg/skills/postgresql.svg";
import vitejs from "../assets/svg/skills/vitejs.svg";
import dart from "../assets/svg/skills/dart.svg";
import go from "../assets/svg/skills/go.svg";
import java from "../assets/svg/skills/java.svg";
import kotlin from "../assets/svg/skills/kotlin.svg";
import python from "../assets/svg/skills/python.svg";
import ruby from "../assets/svg/skills/ruby.svg";
import swift from "../assets/svg/skills/swift.svg";
import aws from "../assets/svg/skills/aws.svg";
import django from "../assets/svg/skills/django.svg";
import firebase from "../assets/svg/skills/firebase.svg";
import git from "../assets/svg/skills/git.svg";
import graphql from "../assets/svg/skills/graphql.svg";
import lightroom from "../assets/svg/skills/lightroom.svg";
import materialui from "../assets/svg/skills/materialui.svg";
import numpy from "../assets/svg/skills/numpy.svg";
import tensorflow from "../assets/svg/skills/tensorflow.svg";
import flutter from "../assets/svg/skills/flutter.svg";
import microsoftoffice from "../assets/svg/skills/microsoftoffice.svg";
import nodejs from "../assets/svg/skills/nodejs.svg";
import postman from "../assets/svg/skills/postman.svg";
import vscode from "../assets/svg/skills/vs-code.svg";
import jenkins from "../assets/svg/skills/jenkins.svg";
import jmeter from "../assets/svg/skills/apachejmeter.svg";
import kubernetes from "../assets/svg/skills/kubernetes.svg";
import atlassian from "../assets/svg/skills/atlassian.svg";
import ubuntu from "../assets/svg/skills/ubuntu.svg";
import linux from "../assets/svg/skills/linux.svg";
import dynatrace from '../assets/svg/skills/dynatrace.svg';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "dynatrace":
        return dynatrace;
    case "postman":
      return postman;
    case "atlassian":
      return atlassian;
    case "ubuntu":
      return ubuntu;
    case "linux":
      return linux;
    case "vscode":
      return vscode;
    case "jenkins":
      return jenkins;
    case "apachejmeter":
      return jmeter;
    case "kubernetes":
      return kubernetes;
    case "nodejs":
      return nodejs;
    case "html":
      return html;
    case "docker":
      return docker;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "next js":
      return nextJS;
    case "react":
      return react;
    case "typescript":
      return typescript;
    case "bootstrap":
      return bootstrap;
    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;
    case "postgresql":
      return postgresql;
    case "vitejs":
      return vitejs;
    case "dart":
      return dart;
    case "go":
      return go;
    case "java":
      return java;
    case "kotlin":
      return kotlin;
    case "python":
      return python;
    case "ruby":
      return ruby;
    case "swift":
      return swift;
    case "aws":
      return aws;
    case "django":
      return django;
    case "firebase":
      return firebase;
    case "git":
      return git;
    case "graphql":
      return graphql;
    case "lightroom":
      return lightroom;
    case "materialui":
      return materialui;
    case "numpy":
      return numpy;
    case "tensorflow":
      return tensorflow;
    case "flutter":
      return flutter;
    case "microsoft office":
      return microsoftoffice;
    default:
      break;
  }
};
