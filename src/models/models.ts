type Project = {
    number: number;
    buildLord: string;
    totalAmount: number
  };

type Contractor = {
    posNr: number,
    name: string
}  

type ContractPageData = {
  project: Project,
  contractors: Contractor[],
}