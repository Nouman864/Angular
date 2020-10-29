import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {loginConfig } from '../login.config';
import { Injectable } from '@angular/core';
import { AuthService } from '../core/auth.service';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private http: HttpClient,private authService: AuthService) {}
 

  ////////////////////// FLATS/////////////////////
  public async getAllBooks(): Promise<any> {
    const url = loginConfig.getPath() + '/flats';
    const token = await this.authService.getTokenFromStorage();
   
    return this.http.get(url, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }
  public async addNewHotel(data: object): Promise<any> {
    const url = loginConfig.getPath() + '/hotels/add';
    const token = await this.authService.getTokenFromStorage();

    return this.http.post(url, data, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }
  
  public async addNewBook(data: object): Promise<any> {
    const url = loginConfig.getPath() + '/flats/add';
    const token = await this.authService.getTokenFromStorage();

    return this.http.post(url, data, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }

  public async addrent(data: object): Promise<any> {
    const url = loginConfig.getPath() + '/rentflats/add';
  const token = await this.authService.getTokenFromStorage();

   return this.http.post(url, data, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }


  public async addcustomer(data: object): Promise<any> {
    const url = loginConfig.getPath() + '/rentflats/customer';
  const token = await this.authService.getTokenFromStorage();

   return this.http.post(url, data, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }

  public async addhotelcustomer(data: object): Promise<any> {
    const url = loginConfig.getPath() + '/bookedrooms/customer';
  const token = await this.authService.getTokenFromStorage();

   return this.http.post(url, data, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  } 


  public async payme(data: object): Promise<any> {
    const url = loginConfig.getPath() + '/bookedrooms/payme';
  const token = await this.authService.getTokenFromStorage();

   return this.http.post(url, data, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }
  
  public async addtoken(data: object): Promise<any> {
    const url = loginConfig.getPath() + '/rentflats/token';
  const token = await this.authService.getTokenFromStorage();

   return this.http.post(url, data, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }
  public async addhoteltoken(data: object): Promise<any> {
    const url = loginConfig.getPath() + '/bookedrooms/token';
  const token = await this.authService.getTokenFromStorage();

   return this.http.post(url, data, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }
  public async adreview(data: object): Promise<any> {
    const url = loginConfig.getPath() + '/ratings/add';
  const token = await this.authService.getTokenFromStorage();

   return this.http.post(url, data, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }


  
 
   public async updateBook(data): Promise<any> {
    const url =loginConfig.getPath() + `/flats/${data._id}`;
    const token = await this.authService.getTokenFromStorage();

  return this.http.put(url, data, {
    headers: new HttpHeaders().set('Authorization', token)
  });
  }
  public async deleteBook(id: string): Promise<any> {
    const url = loginConfig.getPath() + `/flats/${id}`;
    const token = await this.authService.getTokenFromStorage();

    return this.http.delete(url, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }
  public async deletebooking(id: string): Promise<any> {
    const url = loginConfig.getPath() + `/bookedrooms/${id}`;
    const token = await this.authService.getTokenFromStorage();

    return this.http.delete(url, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }


  
  public async getflat(owner: string): Promise<any> {
    const url = loginConfig.getPath() + '/flats/' + owner;
    const token = await this.authService.getTokenFromStorage();

    return this.http.get(url, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }
public async getrating(data: string): Promise<any> {
    const url = loginConfig.getPath() + '/ratings/ad';
    const token = await this.authService.getTokenFromStorage();
    
    return this.http.post(url, data, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }


///////////////////////// HOTELS//////////////////


public async getAllHotels(): Promise<any> {
    const url = loginConfig.getPath() + '/hotels';
    const token = await this.authService.getTokenFromStorage();
   
    return this.http.get(url, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }
  
  public async gethotel(owner: string): Promise<any> {
    const url = loginConfig.getPath() + '/hotels/' + owner;
    const token = await this.authService.getTokenFromStorage();

    return this.http.get(url, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }
  public async getbookinglist(owner: string): Promise<any> {
    const url = loginConfig.getPath() + '/bookedrooms/' + owner;
    const token = await this.authService.getTokenFromStorage();

    return this.http.get(url, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }
  public async hotelreview(data: object): Promise<any> {
    const url = loginConfig.getPath() + '/hotelratings/add';
  const token = await this.authService.getTokenFromStorage();

   return this.http.post(url, data, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }

  public async updatehotel(data): Promise<any> {
    const url =loginConfig.getPath() + `/hotels/${data._id}`;
    const token = await this.authService.getTokenFromStorage();

  return this.http.put(url, data, {
    headers: new HttpHeaders().set('Authorization', token)
  });
  }
  public async deletehotel(id: string): Promise<any> {
    const url = loginConfig.getPath() + `/hotels/${id}`;
    const token = await this.authService.getTokenFromStorage();

    return this.http.delete(url, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }
  public async deletereservetable(id: string): Promise<any> {
    const url = loginConfig.getPath() + `/bookedtables/${id}`;
    const token = await this.authService.getTokenFromStorage();

    return this.http.delete(url, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }
  

  //////////////////////////// ROOMS//////////////////////
  public async addRoom(data: object): Promise<any> {
    const url = loginConfig.getPath() + '/rooms/add';
    const token = await this.authService.getTokenFromStorage();

    return this.http.post(url, data, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }
  public async getroom(ownerr: string): Promise<any> {
    const url = loginConfig.getPath() + '/rooms/' + ownerr;
    const token = await this.authService.getTokenFromStorage();

    return this.http.get(url, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }
  public async getmultipleroom(hotel: string): Promise<any> {
    const url = loginConfig.getPath() + '/rooms/' + hotel;
    const token = await this.authService.getTokenFromStorage();

    return this.http.get(url, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }
  

  public async reservedRoom(data: object): Promise<any> {
    const url = loginConfig.getPath() + '/bookedrooms/add';
    const token = await this.authService.getTokenFromStorage();

    return this.http.post(url, data, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }


  public async checkroom(data: object): Promise<any> {
    const url = loginConfig.getPath() + '/bookedrooms/chk';
    const token = await this.authService.getTokenFromStorage();

    return this.http.post(url, data, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }

  public async Qrcode(data: object): Promise<any> {
    const url = loginConfig.getPath() + '/roomcodes/add';
    const token = await this.authService.getTokenFromStorage();

    return this.http.post(url, data, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }
  public async tablecode(data: object): Promise<any> {
    const url = loginConfig.getPath() + '/bookedtables/table';
    const token = await this.authService.getTokenFromStorage();

    return this.http.post(url, data, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }
  public async roomcode(data: object): Promise<any> {
    const url = loginConfig.getPath() + '/bookedrooms/rmcode';
    const token = await this.authService.getTokenFromStorage();

    return this.http.post(url, data, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }
  


  public async scanroom(data: object): Promise<any> {
    const url = loginConfig.getPath() + '/bookedrooms/scan';
    const token = await this.authService.getTokenFromStorage();

    return this.http.post(url, data, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }
  public async scan(data: object): Promise<any> {
    const url = loginConfig.getPath() + '/bookedtables/scantable';
    const token = await this.authService.getTokenFromStorage();

    return this.http.post(url, data, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }



////////////////////////////    RESTURANTS   ////////////////////////////////

public async addresturant(data: object): Promise<any> {
  const url = loginConfig.getPath() + '/resturants/add';
  const token = await this.authService.getTokenFromStorage();

  return this.http.post(url, data, {
    headers: new HttpHeaders().set('Authorization', token)
  });
}
public async addmenu(data: object): Promise<any> {
  const url = loginConfig.getPath() + '/menus/add';
  const token = await this.authService.getTokenFromStorage();

  return this.http.post(url, data, {
    headers: new HttpHeaders().set('Authorization', token)
  });
}

//////////////////////// EDIT MENU ///////////////////////////////


public async editmenu(data: object): Promise<any> {
  const url =loginConfig.getPath() + '/menus/edit';
  const token = await this.authService.getTokenFromStorage();

return this.http.post(url, data, {
  headers: new HttpHeaders().set('Authorization', token)
});
}

public async edittable(data: object): Promise<any> {
  const url =loginConfig.getPath() + '/tables/edit';
  const token = await this.authService.getTokenFromStorage();

return this.http.post(url, data, {
  headers: new HttpHeaders().set('Authorization', token)
});
}








public async deletedish(data): Promise<any> {
  const url =loginConfig.getPath() + '/menus/del';
  const token = await this.authService.getTokenFromStorage();

return this.http.post(url, data, {
  headers: new HttpHeaders().set('Authorization', token)
});
}

public async deletetable(data): Promise<any> {
  const url =loginConfig.getPath() + '/tables/del';
  const token = await this.authService.getTokenFromStorage();

return this.http.post(url, data, {
  headers: new HttpHeaders().set('Authorization', token)
});
}



public async deleteroom(data): Promise<any> {
  const url =loginConfig.getPath() + '/rooms/del';
  const token = await this.authService.getTokenFromStorage();

return this.http.post(url, data, {
  headers: new HttpHeaders().set('Authorization', token)
});
}
/////////////////TABLE///////////////////



public async addtable(data: object): Promise<any> {
  const url = loginConfig.getPath() + '/tables/add';
  const token = await this.authService.getTokenFromStorage();

  return this.http.post(url, data, {
    headers: new HttpHeaders().set('Authorization', token)
  });
}










public async getmenu(restrnid: string): Promise<any> {
  const url = loginConfig.getPath() + '/menus/' + restrnid;
  const token = await this.authService.getTokenFromStorage();

  return this.http.get(url, {
    headers: new HttpHeaders().set('Authorization', token)
  });
}


public async gettable(tablid: string): Promise<any> {
  const url = loginConfig.getPath() + '/tables/' + tablid;
  const token = await this.authService.getTokenFromStorage();

  return this.http.get(url, {
    headers: new HttpHeaders().set('Authorization', token)
  });
}

public async getrentflats(rent: string): Promise<any> {
  const url = loginConfig.getPath() + '/rentflats/' + rent;
  const token = await this.authService.getTokenFromStorage();

  return this.http.get(url, {
    headers: new HttpHeaders().set('Authorization', token)
  });
}













  public async getresturant(owner: string): Promise<any> {
    const url = loginConfig.getPath() + '/resturants/' + owner;
    const token = await this.authService.getTokenFromStorage();

    return this.http.get(url, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }
  public async getreview(data: object): Promise<any> {
    const url = loginConfig.getPath() + '/resturantratings/review';
    const token = await this.authService.getTokenFromStorage();

    return this.http.post(url,data, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }

  public async getflatreview(data: object): Promise<any> {
    const url = loginConfig.getPath() + '/ratings/flatrevew';
    const token = await this.authService.getTokenFromStorage();

    return this.http.post(url,data, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }
  public async gethotelreview(data: object): Promise<any> {
    const url = loginConfig.getPath() + '/hotelratings/hotelrevew';
    const token = await this.authService.getTokenFromStorage();

    return this.http.post(url,data, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }
  

  public async getAllresturant(): Promise<any> {
    const url = loginConfig.getPath() + '/resturants';
    const token = await this.authService.getTokenFromStorage();
   
    return this.http.get(url, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }
  
  public async reviewresturant(data: object): Promise<any> {
    const url = loginConfig.getPath() + '/resturantratings/add';
  const token = await this.authService.getTokenFromStorage();

   return this.http.post(url, data, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }
 
  public async reservedTable(data: object): Promise<any> {
    const url = loginConfig.getPath() + '/bookedtables/add';
    const token = await this.authService.getTokenFromStorage();

    return this.http.post(url, data, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }
  public async reservedroom(data: object): Promise<any> {
    const url = loginConfig.getPath() + '/bookedrooms/add';
    const token = await this.authService.getTokenFromStorage();

    return this.http.post(url, data, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }

  public async updateresturant(data): Promise<any> {
    const url =loginConfig.getPath() + `/resturants/${data._id}`;
    const token = await this.authService.getTokenFromStorage();

  return this.http.put(url, data, {
    headers: new HttpHeaders().set('Authorization', token)
  });
  }
  public async updatemenu(data): Promise<any> {
    const url =loginConfig.getPath() + `/menus/${data._id}`;
    const token = await this.authService.getTokenFromStorage();

  return this.http.put(url, data, {
    headers: new HttpHeaders().set('Authorization', token)
  });
  }

/////////////////////TABLE//////////////////////////

  public async updatetable(data): Promise<any> {
    const url =loginConfig.getPath() + `/tables/${data._id}`;
    const token = await this.authService.getTokenFromStorage();

  return this.http.put(url, data, {
    headers: new HttpHeaders().set('Authorization', token)
  });
  }



 ////////////////////ROOOMXS/////////////////////////////////////////




 public async newroom(data): Promise<any> {
  const url =loginConfig.getPath() + `/rooms/${data._id}`;
  const token = await this.authService.getTokenFromStorage();

return this.http.put(url, data, {
  headers: new HttpHeaders().set('Authorization', token)
});
}





 public async updateroom(data): Promise<any> {
  const url =loginConfig.getPath() + '/rooms/data';
  const token = await this.authService.getTokenFromStorage();

return this.http.post(url, data, {
  headers: new HttpHeaders().set('Authorization', token)
});
}





  public async checktable(data: object): Promise<any> {
    const url = loginConfig.getPath() + '/bookedtables/check';
    const token = await this.authService.getTokenFromStorage();

    return this.http.post(url, data, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }


  public async deleteresturant(id: string): Promise<any> {
    const url = loginConfig.getPath() + `/resturants/${id}`;
    const token = await this.authService.getTokenFromStorage();

    return this.http.delete(url, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }
  
  public async deleteflattt(id: string): Promise<any> {
    const url = loginConfig.getPath() + `/rentflats/${id}`;
    const token = await this.authService.getTokenFromStorage();

    return this.http.delete(url, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }


  
  public async emailnotify(data: object): Promise<any> {
    const url = loginConfig.getPath() + '/rentflats/notify';
    const token = await this.authService.getTokenFromStorage();

    return this.http.post(url, data, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }



  ///////////////////////CLIENT PROFILE/////////////////////////////////////
  public async getclient(ownerr: string): Promise<any> {
    const url = loginConfig.getPath() + '/clients/' + ownerr;
    const token = await this.authService.getTokenFromStorage();

    return this.http.get(url, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }


  public async getviewflat(data: object): Promise<any> {
    const url = loginConfig.getPath() + '/rentflats/flat';
    const token = await this.authService.getTokenFromStorage();

    return this.http.post(url, data, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }
  public async  getclientreservedrm(data: object): Promise<any> {
    const url = loginConfig.getPath() + '/bookedrooms/room';
    const token = await this.authService.getTokenFromStorage();

    return this.http.post(url, data, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }


  ///////////////MARRAIGE HALL/////////////////////////////////
  public async addNewmarriage(data: object): Promise<any> {
    const url = loginConfig.getPath() + '/halls/add';
    const token = await this.authService.getTokenFromStorage();

    return this.http.post(url, data, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }
  public async addhallmenu(data: object): Promise<any> {
    const url = loginConfig.getPath() + '/hallmenus/add';
    const token = await this.authService.getTokenFromStorage();

    return this.http.post(url, data, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }

  
  public async gethall(owner: string): Promise<any> {
    const url = loginConfig.getPath() + '/halls/' + owner;
    const token = await this.authService.getTokenFromStorage();

    return this.http.get(url, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }
  
  public async gethalmenu(restrnid: string): Promise<any> {
    const url = loginConfig.getPath() + '/hallmenus/' + restrnid;
    const token = await this.authService.getTokenFromStorage();
  
    return this.http.get(url, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }

  public async deletemarraige(id: string): Promise<any> {
    const url = loginConfig.getPath() + `/halls/${id}`;
    const token = await this.authService.getTokenFromStorage();

    return this.http.delete(url, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }

  public async updatehall(data): Promise<any> {
    const url =loginConfig.getPath() + `/halls/${data._id}`;
    const token = await this.authService.getTokenFromStorage();

  return this.http.put(url, data, {
    headers: new HttpHeaders().set('Authorization', token)
  });
  }

  public async  gethallmenu(data: object): Promise<any> {
    const url = loginConfig.getPath() + '/hallmenus/hal';
    const token = await this.authService.getTokenFromStorage();

    return this.http.post(url, data, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }
  
}
