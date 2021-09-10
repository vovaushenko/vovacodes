/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * APIfeatures class, enhances mongoose query with additional filtering, sorting, limiting and pagination functionality
 * @class APIfeatures
 * @param  {queryString} query in NextApiRequest
 * @param  {query} query
 * @returns {query} - filtered, sorted , limited aor  paginated query. If this will be specified in URL
 */
export class APIfeatures {
  queryString: {
    [key: string]: string;
  };
  query: any;

  constructor(
    query: any,
    queryString: {
      [key: string]: string;
    }
  ) {
    this.query = query;
    this.queryString = queryString;
  }

  filter(): this {
    const queryObj = { ...this.queryString };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((el) => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    this.query = this.query.find(JSON.parse(queryStr));

    if (queryObj.model) {
      const filterByModel = {
        model: { $regex: queryObj.model, $options: 'i' },
      };
      this.query = this.query.find(filterByModel);
    }

    return this;
  }

  sort(): this {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' ');
      this.query = this.query.sort(sortBy);
    } else {
      this.query.sort('-createdAt');
    }
    return this;
  }

  limitFields(): this {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(',').join(' ');
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select('-__v');
    }
    return this;
  }

  paginate(): this {
    const page = Number(this.queryString.page) || 1;
    const limit = Number(this.queryString.limit) || 10;
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
}
