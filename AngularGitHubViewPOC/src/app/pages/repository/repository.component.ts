import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {

  repoDetail:any
  constructor(private _Activatedroute:ActivatedRoute,private repositoryService:RepositoryService){
    
  }
  ngOnInit(): void {
    this.getRepository()
  }

  getRepository(){
    this._Activatedroute.paramMap.subscribe((data:any)=>{
      let params=data.params;
      this.repositoryService.getRepository(params.owner,params.name).subscribe((data:any)=>{
        this.repoDetail=data;
        console.log({x:data,y:this.repoDetail?.owner?.avatar_url})

      })
    })
  }

}
