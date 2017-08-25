const fs = require('fs'),
	faker = require('faker/locale/es'),
	axios = require('axios'),
	ACCESS_TOKEN = require('../.env-dev-local').ACCESS_TOKEN;


// This obj will be populate with comments using genComments()
const comments = {};
// This obj will be populate with posts using genPosts()
const posts = [];


// build fill info for comments and user name
const fakeInfo = () => { return {
	'text': faker.lorem.sentence(),
	'user': faker.internet.userName()
}}

// Make some chars rondomly uppercase
function randomUC (char) {
	let seed = Math.random();

	return Math.round(seed) == 1 ? char.toUpperCase() : char;
}

// Generates a random alphanumeric code for comments to bind them with its posts
const randomCode = () => {
	const result = new Array(11).fill(0);

	return result.map(() => randomUC(Math.random().toString(36).slice(2, 3))).join("");
}

// writes json files in files system for later use
const writeJSON = (fileName, output) => {
	fs.writeFile(
		`${__dirname}/${fileName}.json`,
		JSON.stringify(output , null, 2),
		() => console.log(`${fileName}.json created`)
	)
}

// Generates comments for posts
const genComments = (commentCode) => {
	const commentsPerPost = Math.round(Math.random() * 10);
	let postComments = new Array(commentsPerPost).fill(0);

	return comments[commentCode] = postComments.map(() => fakeInfo());
}


// Builds posts obj
const genPosts = (json) => {
	const { data } = json;

	data.map((post, index) => {
		const commentCode = randomCode();

		genComments(commentCode);

		// Builds the posts array
		posts.push({
			code: commentCode,
			caption: post.caption.text,
			likes: post.likes.count,
			id: post.id,
			display_src: post.images.standard_resolution.url
		})
	})

	writeJSON('mock-comments', comments);
	writeJSON('mock-posts', posts);
}

// Request for recent Instagram posts from SM account for Lucirent
(() => {
  const URL = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${ACCESS_TOKEN}`;

  axios.get(URL)
  	.then((res) => genPosts(res.data))
  	.catch((err) => console.log(err))
})()