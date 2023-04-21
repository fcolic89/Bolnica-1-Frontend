import {PrescriptionType} from "../laboratory-enums/PrescriptionType";
import {PrescriptionStatus} from "../laboratory-enums/PrescriptionStatus";
import {PrescriptionAnalysisDto} from "./PrescriptionAnalysisDto";

export class PrescriptionInfirmarySendDto{
  type:PrescriptionType = PrescriptionType.STACIONAR;
  doctorLbz: string = '';
  departmentFromId: number = 0;
  departmentToId: number = 0;
  lbp: string = '';
  creationDateTime: Date = new Date(); // ovde je timestamp
  status: PrescriptionStatus = PrescriptionStatus.NEREALIZOVAN;
  referralDiagnosis: string = '';
  referralReason: string = '';
}
