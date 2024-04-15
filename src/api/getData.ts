import { contractorsForFirstProj } from "../data/contractors"
import { proj1 } from "../data/projects"

export const getProjectContractorData = (projectNum: Number): ContractPageData => {
    //Hardcoded to start with
    // need to get it based on the proj num
    return {contractors: contractorsForFirstProj, project: proj1}
}