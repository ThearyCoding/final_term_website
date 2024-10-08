const courseData = [
    {
        title: "Introduction to Flutter",
        description: "Learn the basics of Flutter and how to create your first app.",
        videoUrl: "https://www.youtube.com/embed/UPSsxGQRIzs?si=aPIdTMZ8Tiqofw1K"
    },
    {
        title: "Flutter Widgets",
        description: "Discover the fundamental widgets used in Flutter development.",
        videoUrl: "https://www.youtube.com/embed/lat50F6Gjms?si=RFWuu6otQ1dvpCKX"
    },
    {
        title: "State Management",
        description: "Learn how to manage state in your Flutter applications.",
        videoUrl: "https://www.youtube.com/embed/GkmYtjL6odI?si=cfVsVNGSo-yLHASE"
    },
    {
        title: "Networking in Flutter",
        description: "Understand how to make API calls and handle network requests.",
        videoUrl: "https://www.youtube.com/embed/4hq_Kwu7sgU?si=39bKLtKS3WXlqMID"
    }
];

const videoElement = document.getElementById('course-video');
const videoTitle = document.getElementById('video-title');
const videoDescription = document.getElementById('video-description');
const courseList = document.getElementById('course-list');

function addAutoplayAndMute(url) {
    if (url.includes('?')) {
        return `${url}&autoplay=1&mute=1`;  
    } else {
        return `${url}?autoplay=1&mute=1`;  
    }
}


function changeVideo(videoData, activeItem) {
    const autoplayUrl = addAutoplayAndMute(videoData.videoUrl);
    videoElement.src = autoplayUrl;
    videoTitle.textContent = videoData.title;
    videoDescription.textContent = videoData.description;

    const listItems = courseList.querySelectorAll('li');
    listItems.forEach(li => li.classList.remove('active'));


    activeItem.classList.add('active');
}

function populateCourseList() {
    courseData.forEach((course) => {
        const listItem = document.createElement('li');
        listItem.textContent = course.title;
        listItem.style.cursor = 'pointer';


        listItem.addEventListener('click', () => {
            changeVideo(course, listItem);
        });

        courseList.appendChild(listItem);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    populateCourseList();
    changeVideo(courseData[0], courseList.firstChild); 
});
