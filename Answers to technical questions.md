The site is published at https://tiangey.github.io/finding-restaurant/

1. It took me about half the day to do the assignment. For the feature parts, I would add filter function and sorting function and create a search bar with auto-complete search suggestions. For each search result, a detail page which we can click in for more information about this restaurant would be necessary. When we do the search, since there are so many images and the time for loading is long, we can build some preload components as well. Create unit test using Jest & Enzyme.

2. For the React (JavaScript library), one of the useful features is Hooks. Most of the time, we can use function components instead of class components to avoid using the lifecycle methods. E.g., we can use this to fetch data: useEffect(() => { fetchRestaurants(); }, []);

3. We can log how long it takes to complete a request and using a test platform to narrow down the cause of the performance problems.

4. Most of the time, the requests are the same within a short period. We could add a caching policy using the API Manager. And there are too many unuseful data for small application. We could customized the Api constructor to reduce the size of JSON.

5. dage.json

{ 
  "name": 
    { 
      "first-name": "Tiange",
      "last-name": "Yao",
      "nickname": "Dage", 
    },
  "gender": "female",
  "age": "secret",
  "contact-information":
    {
      "e-mail": "cangyazi@gmail.com",
      "phone-number": "6476792520", 
    },
  "skills":
    {
      "front-end": ["React", "Redux", "React-Redux", "Javascript", "ES6", "Saga", "Axios", "CSS", "HTML", "Material UI", "Git"],
      "ui-design": ["Sketch", "Flinto", "Adobe Illustrator", "Adobe Photoshop", "After Effect"],
      "graphic-design": ["Adobe Illustrator", "Adobe Photoshop"],
    },
  "work-exprience":
    [
      {
        "position": "Front-end Developer",
        "company": "Shippal",
        "duty": "Create new features for web application",
      },
      { 
        "position": "Web UI Developer",
        "company": "Seenpro",
        "duty": "Design & develop websites",
      },
      { 
        "position": "Web Developer & Graphic Designer",
        "company": "INTS",
        "duty": "Implement company website from design to development",
      }
    ],
  "hobbies": ["Ski", "Badminton", "Hiking", "Drawing", "Photography", "Rock Climbing", "Diving"],
  "education":
    { 
      "university": "University of Ottawa",
      "degree": "Master",
      "major": "Engineering",
    }, 
}
  
