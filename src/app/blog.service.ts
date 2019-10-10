
import { BlogModel} from './blog.model';

export class BlogService {
  public blogs: BlogModel[] = [
    new BlogModel(
      'Blog/Article',
      500,
      'Typically 450-500 words an e-book is perfect for your target audience ranging from prospective customers to users',
      'https://cdn2.wpbeginner.com/wp-content/uploads/2019/01/choosethebestbloggingplatform.png'
    ),
    new BlogModel(
      'Newsletter/E-mailer',
      500,
      'Typically 450-500 words an e-book is perfect for your target audience ranging from prospective customers to users',
      'https://cdn2.wpbeginner.com/wp-content/uploads/2019/01/choosethebestbloggingplatform.png'
    ),
    new BlogModel(
      'Whitepaper',
      500,
      'Typically 450-500 words an e-book is perfect for your target audience ranging from prospective customers to users',
      'https://cdn2.wpbeginner.com/wp-content/uploads/2019/01/choosethebestbloggingplatform.png'
    ),
    new BlogModel(
      'e-book',
      500,
      'Typically 450-500 words an e-book is perfect for your target audience ranging from prospective customers to users',
      'https://cdn2.wpbeginner.com/wp-content/uploads/2019/01/choosethebestbloggingplatform.png'
    ),
    new BlogModel(
      'Report/Guide',
      500,
      'Typically 450-500 words an e-book is perfect for your target audience ranging from prospective customers to users',
      'https://cdn2.wpbeginner.com/wp-content/uploads/2019/01/choosethebestbloggingplatform.png'
    ),
    new BlogModel(
      'Production Description',
      500,
      'Typically 450-500 words an e-book is perfect for your target audience ranging from prospective customers to users',
      'https://cdn2.wpbeginner.com/wp-content/uploads/2019/01/choosethebestbloggingplatform.png'
    ),
    new BlogModel(
      'Website Content',
      500,
      'Typically 450-500 words an e-book is perfect for your target audience ranging from prospective customers to users',
      'https://cdn2.wpbeginner.com/wp-content/uploads/2019/01/choosethebestbloggingplatform.png'
    ),
    new BlogModel(
      'Video Script',
      500,
      'Typically 450-500 words an e-book is perfect for your target audience ranging from prospective customers to users',
      'https://cdn2.wpbeginner.com/wp-content/uploads/2019/01/choosethebestbloggingplatform.png'
    ),
    new BlogModel(
      'Company Profile/ Brochure',
      500,
      'Typically 450-500 words an e-book is perfect for your target audience ranging from prospective customers to users',
      'https://cdn2.wpbeginner.com/wp-content/uploads/2019/01/choosethebestbloggingplatform.png'
    ),
    new BlogModel(
      'Press Release',
      500,
      'Typically 450-500 words an e-book is perfect for your target audience ranging from prospective customers to users',
      'https://cdn2.wpbeginner.com/wp-content/uploads/2019/01/choosethebestbloggingplatform.png'
    )
  ];
  constructor() { }
}
