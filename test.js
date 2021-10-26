// eslint-disable-next-line prettier/prettier
const sentence = 'Learn with Sumit is all about teaching web development skills and techniques in an efficient and practical manner. If you are just getting started in web development,Learn with Sumit has all the tools you need to learn the newest and ost popular technologies to convert you from a no stack to full stack developer. Learn       with Sumit also deep dives into advanced topics using the latest best practices for you seasoned web developer.';

const matches = sentence.match(/sumit/gi);
const occurrences = matches ? matches.length : 0;
console.log(occurrences);

const position = sentence.match(/sumit/i);
console.log(position);
