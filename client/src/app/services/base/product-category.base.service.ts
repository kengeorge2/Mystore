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
 *  FOR CUSTOMIZE product-categoryBaseService PLEASE EDIT ../product-category.service.ts
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
import { ProductCategory } from '../../domain/mystore_db/product-category';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../ProductCategory.service.ts
 */

/*
 * SCHEMA DB ProductCategory
 *
	{
		Name: {
			type: 'String'
		},
		//RELATIONS
		//EXTERNAL RELATIONS
	}
 *
 */
@Injectable()
export class ProductCategoryBaseService {

    contextUrl: string = environment.endpoint + '/productcategory';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * ProductCategoryService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: ProductCategory): Observable<ProductCategory> {
        return this.http
            .post<ProductCategory>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * ProductCategoryService.delete
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
    * ProductCategoryService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id resource
    *
    */
    get(id: string): Observable<ProductCategory> {
        return this.http
            .get<ProductCategory>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * ProductCategoryService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<ProductCategory[]> {
        return this.http
            .get<ProductCategory[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * ProductCategoryService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: ProductCategory): Observable<ProductCategory> {
        return this.http
            .post<ProductCategory>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}