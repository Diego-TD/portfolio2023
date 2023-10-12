const fs = require('fs');
const path = require('path');
const htmlhint = require('htmlhint').HTMLHint; // Import HTMLHint from htmlhint
const assert = require('assert');

// Load your custom rules configuration from the JSON file
const rulesConfig = JSON.parse(fs.readFileSync('tests/htmlhintRules.json', 'utf8'));


describe('HTML Validation', () => {
  it('should validate HTML without errors', () => {
    const htmlPath = path.join(__dirname, '../index.html'); 

    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    
    // Validate HTML content using custom rules
    const htmlHintMessages = htmlhint.verify(htmlContent, rulesConfig);

    // Check if there are errors
    const errors = htmlHintMessages.filter((message) => message.type === 'error');

    assert.strictEqual(errors.length, 0, 'HTML contains validation errors.');
  });
});
