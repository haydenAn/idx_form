import { Component, OnInit } from '@angular/core';
import { DocModel } from 'src/app/_models/docModel';
// import { ActivatedRoute } from "@angular/router";
import { DocDataService } from '../_services/doc-data.service';
import { MsgModel } from '../_models/msgModel';


@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {
  documentID : number = 0;
  document : DocModel = new DocModel();
  doc = {
    id : 1,
    vcFirstName : "SHELIA", 
    vcMiddleName : "", 
    vcLastName : "THOMAS", 
    cGender :  "U", 
    dtDOB : new Date("12/31/1969 5:00:00 AM"), 
    dtDOS : new Date("6/22/2015 12:00:00 AM"), 
    dtNow : new Date(Date.now()), 
    bRequireACK : false, 
    OLocation : null, 
    OProvider : null, 
    vcExternalID : "", 
    vcPID : "1579", 
    vcPatientID : "1579", 
    vcFileExtension : ".pdf", 
    vcOrdersToComplete : "", 
    vcAlternateUniqueId : null, 
    vcCurrentPath : "\\\\IDLDEMO\\StorageFolders\\DO_NOT_EDIT\\Immediate\\BOF_20150622_112048.pdf", 
    vcIndexedBy : "hwinston@plain634450", 
    vcCustom : "Ext Oth", 
    vcMember :"\"External Other Signed\"", 
    vcSummary : "Refill Authorization Request" , 
    vcSerializedObservationData : ""
  }
  


  constructor(private docService: DocDataService) { }

  ngOnInit(): void {
  }

  onSendMsg(){
    const msg = new MsgModel();
    this.docService.sendMsg(msg).subscribe(res=>{
      console.log(res)
    },
    (err)=>{
      console.log(err);
    })
  }

  onSearch(){
    console.log(this.documentID)
    this.docService.getDocData(this.documentID).subscribe(res=>{
      console.log(res);
      // this.document = res.data;
    },
    (err)=>{
      console.log(err);
    })

    /////hardcoded values for a test. remove this afterward 
    this.document = this.doc;
  }

  inputValueChanged(e : any): void{
    this.documentID = e.target.value;
  }

}
