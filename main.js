Peter_pan_song = "";
Harry_potter_theme_song = "";

function setup()
{
    canvas = createCanvas(500,600);
    canvas.center;
    video = createCapture(VIDEO);
    video.hide;
    video.center;
}

function draw()
{
    image(video , 0 , 0 , 500 , 600);
}

function preload()
{
    Peter_pan_song = loadSound("music2.mp3");
    Harry_potter_theme_song = loadSound("music.mp3");
}