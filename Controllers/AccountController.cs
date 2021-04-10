using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class AccountController : Controller
    {
       
            [Route("api/User/Register")]
            [HttpPost]
            public IdentityResult Register(Accountmodel model)
            {
                var userStore = new UserStore<ApplicationUser>(new ApplicationdbContext());
                var manager = new UserManager<ApplicationUser>(userStore);
                var user = new ApplicationUser() { FirstName = model.FirstName, Email = model.Email };
                user.LastName = model.LastName;
                manager.PasswordValidator = new PasswordValidator
                {
                    RequiredLength = 3
                };
                IdentityResult result = manager.Create(user, model.Password);
                return result;
            }
        
    }
}