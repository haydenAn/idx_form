using System;

namespace formMsgOut.API.Models
{
    public class Document
    {
         public int id {get; set;} 
         public string vcFirstName {get; set;} 
         public string vcMiddleName {get; set;} 
         public string vcLastName {get; set;} 
         public string cGender {get; set;} 
         public DateTime dtDOB {get; set}
         public DateTime dtDOS {get; set}

         public DateTime dtNow {get; set}

         public Boolean bRequireACK {get; set;} 
         public string OLocation {get; set}

         public object OProvider {get; set}

         public string vcExternalID {get; set;} 
         public string vcPID {get; set;} 
         public string vcPatientID {get; set;} 
         public string vcFileExtension {get; set;} 
         public string vcOrdersToComplete {get; set;} 
         public int vcAlternateUniqueId {get; set}

          public string vcCurrentPath {get; set;} 
         public string vcIndexedBy {get; set;} 
         public string vcCustom {get; set;} 
         public string vcMember {get; set;} 
         public string vcSummary {get; set;} 
         public string vcSerializedObservationData {get; set;} 

    }
}