export const GeneratePageContent = [
  {
    section: 1,
    title: "1. Obtain the 'diff' File",
    content: [
      "Begin by creating a 'diff' file that captures all modifications introduced in the Pull Request or branch.",
      "To generate this file, execute the below command.",
      "Make sure you are on the branch associated with the opened PR and adjust the name of the 'main' branch if it differs.",
    ],
    codeBlock: true,
    code: "git --no-pager diff FETCH_HEAD $(git merge-base FETCH_HEAD main) > diff.txt",
  },
  {
    section: 2,
    title: "2. Upload the 'diff' File",
    content: [
      "In the previous step, the executed Git command saved a file named 'diff.txt'. Proceed to upload this file here.",
    ],
    codeBlock: false,
    code: "",
  },
  {
    section: 3,
    title: "3. Select Your Preferences",
    content: [
      "Now, choose the options you'd like to include in your description.",
    ],
    codeBlock: false,
    code: "",
  },
  {
    section: 4,
    title: "4. Generate PR Description",
    content: [
      "Click the 'Generate' button and observe as your PR description is automatically generated.",
    ],
    codeBlock: false,
    code: "",
  },
];
