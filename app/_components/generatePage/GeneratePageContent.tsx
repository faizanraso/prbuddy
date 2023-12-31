export const GeneratePageContent = [
  {
    sectionNumber: 1,
    title: "1. Obtain The 'diff' File",
    content: [
      "Begin by creating a 'diff' file that captures all modifications introduced in the Pull Request or branch.",
      "To generate this file, execute the below command.",
      "Make sure you are on the branch associated with the opened PR and adjust the name of the 'main' branch if it differs.",
    ],
    codeBlock: true,
    code: "git --no-pager diff $(git merge-base FETCH_HEAD main) FETCH_HEAD > diff.txt",
  },
  {
    sectionNumber: 2,
    title: "2. Upload The 'diff' File",
    content: [
      "In the previous step, the executed Git command saved a file named 'diff.txt'. Proceed to upload this file here.",
    ],
    codeBlock: false,
    code: "",
  },
  // {
  //   sectionNumber: 3,
  //   title: "3. Select Your Preferences",
  //   content: [
  //     "Now, choose the options you'd like to include in your description.",
  //   ],
  //   codeBlock: false,
  //   code: "",
  // },
  {
    sectionNumber: 3,
    title: "3. Generate Your PR Description",
    content: [
      `Provide your OpenAI API Key (you can enter in 'secret-password' if you don't have one) and click the 'Generate' button and observe as your PR description is generated.`,
    ],
    codeBlock: false,
    code: "",
  },
];
