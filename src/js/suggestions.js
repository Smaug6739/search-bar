let suggestions = [
  "Channel",
  "CodingLab",
  "CodingNepal",
  "YouTube",
  "YouTuber",
  "YouTube Channel",
  "Login Form in HTML & CSS",
  "How to learn HTML & CSS",
  "How to learn JavaScript",
  "How to become Freelancer",
  "How to become Web Designer",
  "How to start Gaming Channel",
  "How to start YouTube Channel",
  "What does HTML stands for?",
  "What does CSS stands for?",
];

function getSuggestion(str) {
  // Here you can fetch an api with the start of string

  let fetchedSuggestions = [];
  const startsWith = suggestions.filter((s) => {
    return s.trim().toLowerCase().startsWith(str.trim().toLowerCase());
  });
  const includesSuggestions = suggestions.filter((s) => {
    return s.trim().toLowerCase().includes(str.trim().toLowerCase());
  });
  fetchedSuggestions.push(...includesSuggestions);
  fetchedSuggestions.push(...startsWith);
  // Unique suggestions
  const unique = new Array(...new Set(fetchedSuggestions));
  return unique;
}
