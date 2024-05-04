const keywords = ["JavaScript", "template", "tagged"];
const template = "Learn \${0} tagged templates to create custom \${1} literals for \${2} manipulation.";

const highlighted = highlightKeywords(template, keywords);

console.log(highlighted);
// Expected: "Learn <span class='highlight'>JavaScript</span> tagged templates to create
// custom <span class='highlight'>template</span> literals for <span class='highlight'>tagg
// ed</span> manipulation."

function highlightKeywords(template, keywords) {
  const processedKeywords = keywords.map(k => {
    return `<span class='highlight'>${k}</span>`;
  });
  return template.replace(/\$\{(\d+)}/g, (_, index) => {
    return processedKeywords[parseInt(index)];
  });
}