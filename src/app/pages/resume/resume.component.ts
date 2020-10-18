import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/common/models/project';
import { Skill } from 'src/app/common/models/skill';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  public srs = {
    title: 'Software Engineer',
    company: 'Cisco Systems / SRS Consulting Inc.',
    time: '2019-07 - Present',
    details: [
      'Rewrote existing applications using Angular framework to improve performance, enhance visuals, and usability.',
      'Utilized Angular elements to create web components that are being used across multiple Cisco web applications.',
      'Collaborated with Backend Engineers and designed best practices for API response and error handling.',
      'Designed routing strategies for the project and enabled lazy loading on modules to improve application performance.',
      'Strengthened development methodologies by introducing dependency graphs and complexity reports ensuring code quality and documentation.',
      'Optimized styling and asset loading strategies to improve maintainability of the repository.',
    ],
  };
  public osi = {
    title: 'Software Engineer',
    company: 'Cisco Systems / OSI Engineering, Inc.',
    time: '2018-04 - 2019-07',
    details: [
      'Optimized state management and memorization to improve application render performance for nested tree tables containing up to 100,000 records.',
      'Applied latest emerging technology, software, and project application trends to update and maintain site applicability.',
      'Conducted unit testing and delivered 90% coverage to ensure code quality.',
      'Worked on CSS styling to achieve responsiveness and established presentation consistency across common browser interfaces.',
      'Migrated applications from cookie based to token based authentication.',
      'Extensively worked on creating common components for team members to reuse.',
    ],
  };
  public synergistic = {
    title: 'Fullstack Developer',
    company: 'Synergistic IT',
    time: '2017-08 - 2018-04',
    details: [
      'Increased modularity by allowing the separation of Cross-cutting concerns using Spring AOP.',
      'Implemented user Rbac authentication and authorization using Spring Security.',
      'Developed functionalities for sending confirmation and notification emails to customers using Apache Velocity.',
      'Created front-end unit tests using Jasmine and Karma and back-end unit tests cases using Junit, Mokito and Powermock.',
      'Extensively developed custom directives in Angular.',
      'Implemented custom HTTP interceptors for API requests to accomplish special requirements on request headers',
    ],
  };
  public workHistory = [this.srs, this.osi, this.synergistic];

  public contact: { label: string; value: string }[] = [
    { label: 'Address', value: 'Santa Clara, CA, 95050' },
    { label: 'Phone', value: '(408) 858-6505' },
    { label: 'E-mail', value: 'zhengaoran325@gmail.com' },
  ];

  public education: { label: string; value: string | string[] }[] = [
    { label: 'Degree', value: 'Bachelor of Science: Computer Science' },
    { label: 'School', value: 'University of California, Irvine - Irvine, CA' },
    { label: 'Year', value: '2014-09 - 2017-03' },
    {
      label: 'Course Work',
      value: [
        'Algorithms And Data Structures',
        'Parallel and Distrubuted Computing',
        'Opreating System',
        'Computer Systems Architecture',
        'Interpreter and Compilers',
        'Network Security',
        'Artificial Intelligence',
      ],
    },
  ];

  public skillSet: Skill[] = [
    {
      title: 'Front-end Skills',
      icon: 'laptop',
      skills: [
        'React (Redux)',
        'Angular',
        'Backbone.js',
        'JavaScript',
        'TypeScript',
        'Html',
        'Css',
        'Webpack',
        'Jest / Jasmine',
        'Vue.js',
        'Git',
      ],
    },
    {
      title: 'Back-end Skills',
      icon: 'database',
      skills: [
        'Java',
        'Spring Boot',
        'Express',
        'Elastic',
        'SQLS',
        'Junit / Mockito',
        'Python',
        'C++',
      ],
    },
  ];

  public projects: Project[] = [
    {
      id: 1,
      name: 'Smart Licensing UI',
      technologies: 'Angular 10, Typescript, HTML, CSS, Express, Nginx, Docker, Jenkins',
      description: 'Migrated existing backbone.js projects to Angular applications. Architected applications and designed core components / services for other team members to use.'
    },
    {
      id: 2,
      name: 'Smart Account Management UI',
      technologies: 'React 16, Redux, Javascript, HTML, CSS, Webpack, Babel, Spring Boot, Nginx, Docker, Jenkins',
      description: 'Developed nested tree tables to help users intuitively view and define their targets within a hierarchical representation of 40 millions of accounts. Built implicit/explicit selection and row expansion for the hierarchical tree structure to enable users to easily and accurately perform actions on their accounts for better user experience. Design state management and memorization to improve render performance of tree tables containing up to 100,000 records.'
    },
    {
      id: 3,
      name: 'Enterprise Agreements UI',
      technologies: 'Angular 8, Typescript, HTML, CSS, Express, Nginx, Docker, Jenkins',
      description: 'Developed an Angular application for customers to view their enterprise agreements and usage of their Cisco licenses. Created Angular web components to allow feature components to be injected into multiple Cisco applications. Wrote unit tests and delivered 90% code coverage'
    },
    {
      id: 4,
      name: 'MCE UI',
      technologies: 'Angular 7, Typescript, HTML, CSS, Express, Nginx, Docker, Jenkins',
      description: 'Developed a web application that allows users to view Cisco license features holistically and understand their usage. Utilized Ag-grid and C3 to create tables and graphs that provide detailed information of a given license feature. Implemented filter and search functionalities that enable users to quickly locate and view desired licenses. Built file export features for both online and offline to allow users to work outside of the tools.'
    },
    {
      id: 5,
      name: 'User Group UI',
      technologies: 'React 16, Redux, Javascript, HTML, CSS, Webpack, Babel, Spring Boot, Nginx, Docker, Jenkins',
      description: 'Developed a web application that provides user group management functionality for the Cisco Smart Account Application. Utilized React and Redux to implement light weighted tables and other rich table features including sorting, searching, filtering, and data exporting. Worked on API integration between Server side and Client side. Handled cross browser/platform compatibility issues on both Windows and Mac OS.'
    },
    {
      id: 6,
      name: 'Insurance Application',
      technologies: 'Spring Boot, Hibernate, Oracle 11g, JavaScript, AngularJS, Bootstrap',
      description: 'Developed an insurance application that allows users to view and modify information according to their roles of access. Customers can check out details of insurance policies, apply for programs they are interested in, and view personal information. Employees can review and verify customers’ information and documentation. Managers can approve and assign new customers to specific employees.'
    },
    {
      id: 7,
      name: 'Camp Blog',
      technologies: 'NodeJS, Express, MongoDB, Cloud 9, EJS, JQuery, Bootstrap',
      description: 'Created a RESTful Blog Application for people to share their camping experience. This application allows registered users to submit posts about their favorite moment in camping, and their posts can contain photos and text description. Users can also view blog posts of others users and choose to up or down vote the content.'
    },
    {
      id: 8,
      name: 'Flashcard Application',
      technologies: 'Spring Framework, MySQL, JDBC, JSP, JavaScript, JQuery, Bootstrap',
      description: 'A web-based application that allows registered users to create flashcard for exam preparation. Users can create two types of flashcard: the standard type flashcard that only contains a question and an answer, and it is capable of general study; the advance type flashcard that includes more information such as difficulty, importance, and topic which can be used for the creation of objective-wised practice exams.'
    },
    {
      id: 9,
      name: 'Fabflix',
      technologies: 'Servlet/JSP, JavaScript, JQuery, MySQL, JDBC, Amazon AWS',
      description: 'Developed a web-based application that allows customers to browse and search movie information, add movies to their shopping cart, and checkout. It contains features such as movie rating system and search engine to help customers finding interesting movies. It also allows employees to add/remove movies and modify metadata of movies.'
    },
  ];

  public certifications = [
    {
      name: 'Oracle Certified Professional Java SE 8 Certification',
      link: 'https://www.youracclaim.com/badges/1ea57361-c6f4-49b2-97bf-1da0330966a0/linked_in_profile',
    },
    {
      name: 'Oracle Certified Associate Java SE 8 Certification',
      link: 'https://www.youracclaim.com/badges/22b354c1-232a-43f5-a807-deca3360ce6c/linked_in_profile',
    },
  ];

  constructor() {}

  ngOnInit() {}

}
