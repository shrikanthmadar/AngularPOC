import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { RepositoriesService } from 'src/app/services/repositories.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {
  repoName:any
  language:any
  userName:any
  sortBy:any
  perPage:any
  sortType:any
  pageNumber:any
  reposList:any[]=[]
  numberOfRepos:number=0
 
 getReposFormGroup=new FormGroup({
  repoName:new FormControl(),
  language:new FormControl(),
  userName:new FormControl()
 })

 constructor(private reposService:RepositoriesService,private route:Router){

 }
  ngOnInit(): void {
    this.getRepositories()  
  }
  
getRepositories() {
  try {
    let formvalue=this.getReposFormGroup.value;
      this.reposService.getRepositories(formvalue.repoName,formvalue.userName,formvalue.language,this.sortType,this.sortBy,this.perPage,this.pageNumber).subscribe((data:any)=>{
        console.log(data)
        this.reposList=data?.items.map((x: any) => {
              let repo = {
                  Name: x?.name,
                  Description: x?.description,
                  Owner: x?.owner.login,
                  CreatedAt: x?.created_at,
                  UpdatedAt: x?.updated_at
              }
              return repo;
          });
        this.numberOfRepos=data.total_count;
      })
  } catch (error) {
      
      console.log(error,"catched error")
  }

}

renderPage(event: number) {
  this.pageNumber = event;
  this.getRepositories();
}

onSubmit(){
  console.log(this.getReposFormGroup.value)
  this.getRepositories()
}

onClickRepo(repo:any){
this.route.navigate(['/repository',repo?.Owner,repo?.Name])
}
}

