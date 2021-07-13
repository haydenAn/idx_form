using formMsgOut.API.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System;
using System.Net;
using System.Net.Mail;
using System.Diagnostics;
using System.IO;

namespace UploaderApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DocController : ControllerBase
    {
        // private readonly whateverDB _docDb

        public DocController()
        {
            //db stuff
            //_docDb = whateverdb.get(documentTable);
        }

        //api/docinfo
        [HttpGet]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetDocInfo(int id) {
            
           Document doc = new Document();
        //    doc = await _docDb.get(id); 

           if(doc == null)
           {
              return NotFound();
           }

           return Ok(doc);
        }
        
        [HttpPost]
        public void SendMsg()
        {
        }
    }
}