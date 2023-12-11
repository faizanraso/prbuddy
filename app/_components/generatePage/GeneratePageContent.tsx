export const GeneratePageContent = [
  {
    title: "1. Get the 'diff'",
    content: [
      "The initial step involves creating a 'diff' file that captures all the modifications made between two commits, essentially reflecting the changes introduced in the Pull Request or branch.",
      "To generate this file, execute the following command.",
      "Ensure that you are on the branch associated with the opened PR and adjust the name of the 'main' branch if it differs.",
    ],
    codeBlock: true,
    code: "git --no-pager diff FETCH_HEAD $(git merge-base FETCH_HEAD main) > diff.txt",
  },
];
