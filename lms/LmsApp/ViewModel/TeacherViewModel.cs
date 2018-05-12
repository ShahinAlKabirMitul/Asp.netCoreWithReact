using System;
using System.Collections.Generic;
using System.Text;
using Common.Model;
using Common.ViewModel;
using Model;

namespace ViewModel
{
    public class TeacherViewModel : BaseViewModel<Teacher>
    {
        public TeacherViewModel(Teacher entity) : base(entity)
        {
            Name = entity.Name;
        }

        public string Name { get; set; }
    }
}
