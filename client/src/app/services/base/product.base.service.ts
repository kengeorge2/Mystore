/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE productBaseService PLEASE EDIT ../product.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { Product } from '../../domain/mystore_db/product';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Product.service.ts
 */

/*
 * SCHEMA DB Product
 *
	{
		Description: {
			type: 'String'
		},
		Image: {
			type: 'Custom'
		},
		Name: {
			type: 'String'
		},
		Price: {
			type: 'Decimal'
		},
		//RELATIONS
		//EXTERNAL RELATIONS
	}
 *
 */
@Injectable()
export class ProductBaseService {

    contextUrl: string = environment.endpoint + '/product';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * ProductService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Product): Observable<Product> {
        return this.http
            .post<Product>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * ProductService.delete
    *   @description CRUD ACTION delete
    *   @param ObjectId id Id
    *
    */
    remove(id: string): Observable<void> {
        return this.http
            .delete<void>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * ProductService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id resource
    *
    */
    get(id: string): Observable<Product> {
        return this.http
            .get<Product>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * ProductService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Product[]> {
        return this.http
            .get<Product[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * ProductService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: Product): Observable<Product> {
        return this.http
            .post<Product>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}
