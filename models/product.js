const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      minlength: [5, "Too short"],
      maxlength: [300, "Too long"],
      text: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    description: {
      type: String,
      trim: true,
      // required: true,
      minlength: [5, "Too short"],
      maxlength: [300, "Too long"],
      text: true,
    },

    price: {
      type: Number,
      // min: 3,
      // max: 5,
      // required: true,
    },

    images: [],
    colorImage: "",
    category: {
      type: ObjectId,
      ref: "Category",
    },
    subCategories: [
      {
        type: ObjectId,
        ref: "SubCategory",
      },
    ],
    quantity: Number,
    sold: {
      type: Number,
      default: 0,
    },

    /*Mongoose String and Number types have an enum validator.
  The enum validator is an array that will check if the value
  given is an item in the array. If the value is not in the array,
  Mongoose will throw a ValidationError when you try to save().
  */

    shipping: {
      type: String,
      // enum: ["Yes", "No"],
    },
    colorImage: { title: String, url: String },
    color: {
      type: String,
    },
    // rating: [{ star: Number, postedBy: ObjectId, ref: "User" }],
    size: [],
   
  },

  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);

const data = {
  code: 0,
  info: {
    goods: {
      getPrice: {},
      soldoutColor: [],
      siteMallInfo: [
        {
          enable_flag: 1,
          mall_code: "1",
          mall_name: "mall",
          mall_sort: 1,
          mall_tags: "1",
          language_mall_name: "mall",
          show_flag: 0,
        },
      ],
      getCccTagId: [156, 174, 257, 1654, 60003167, 60004623],
      getSellingPoints: [],
      wishGood: 0,
      country: "NP",
      multiLocalSize: {
        category_id: 0,
        supplier_category_id: 0,
        skc: "sw2107161258265010",
        size_rule_list: {
          EU: [
            {
              name: "S",
              correspond: "36",
            },
            {
              name: "XS",
              correspond: "34",
            },
            {
              name: "M",
              correspond: "38",
            },
            {
              name: "L",
              correspond: "40/42",
            },
            {
              name: "XL",
              correspond: "44",
            },
            {
              name: "XXL",
              correspond: "46",
            },
            {
              name: "XXXL",
              correspond: "48",
            },
            {
              name: "XXS",
              correspond: "32",
            },
            {
              name: "Petite XXS",
              correspond: "32",
            },
            {
              name: "Petite XS",
              correspond: "34",
            },
            {
              name: "Petite S",
              correspond: "36",
            },
            {
              name: "Petite M",
              correspond: "38",
            },
            {
              name: "Petite L",
              correspond: "40/42",
            },
            {
              name: "Tall XS",
              correspond: "34",
            },
            {
              name: "Tall S",
              correspond: "36",
            },
            {
              name: "Tall M",
              correspond: "38",
            },
            {
              name: "Tall L",
              correspond: "40/42",
            },
            {
              name: "Tall XL",
              correspond: "44",
            },
          ],
          DE: [
            {
              name: "S",
              correspond: "36",
            },
            {
              name: "XS",
              correspond: "34",
            },
            {
              name: "M",
              correspond: "38",
            },
            {
              name: "L",
              correspond: "40/42",
            },
            {
              name: "XL",
              correspond: "44",
            },
            {
              name: "XXL",
              correspond: "46",
            },
            {
              name: "XXXL",
              correspond: "48",
            },
            {
              name: "XXS",
              correspond: "32",
            },
            {
              name: "Petite XXS",
              correspond: "32",
            },
            {
              name: "Petite XS",
              correspond: "34",
            },
            {
              name: "Petite S",
              correspond: "36",
            },
            {
              name: "Petite M",
              correspond: "38",
            },
            {
              name: "Petite L",
              correspond: "40/42",
            },
            {
              name: "Tall XS",
              correspond: "34",
            },
            {
              name: "Tall S",
              correspond: "36",
            },
            {
              name: "Tall M",
              correspond: "38",
            },
            {
              name: "Tall L",
              correspond: "40/42",
            },
            {
              name: "Tall XL",
              correspond: "44",
            },
          ],
          UK: [
            {
              name: "S",
              correspond: "8",
            },
            {
              name: "XS",
              correspond: "6",
            },
            {
              name: "M",
              correspond: "10",
            },
            {
              name: "L",
              correspond: "12/14",
            },
            {
              name: "XL",
              correspond: "16",
            },
            {
              name: "XXL",
              correspond: "18",
            },
            {
              name: "XXS",
              correspond: "4",
            },
            {
              name: "Petite XXS",
              correspond: "4",
            },
            {
              name: "Petite XS",
              correspond: "6",
            },
            {
              name: "Petite S",
              correspond: "8",
            },
            {
              name: "Petite M",
              correspond: "10",
            },
            {
              name: "Petite L",
              correspond: "12/14",
            },
            {
              name: "Tall XS",
              correspond: "6",
            },
            {
              name: "Tall S",
              correspond: "8",
            },
            {
              name: "Tall M",
              correspond: "10",
            },
            {
              name: "Tall L",
              correspond: "12/14",
            },
            {
              name: "Tall XL",
              correspond: "16",
            },
            {
              name: "XXXL",
              correspond: "20",
            },
          ],
          AU: [
            {
              name: "S",
              correspond: "8",
            },
            {
              name: "XS",
              correspond: "6",
            },
            {
              name: "M",
              correspond: "10",
            },
            {
              name: "L",
              correspond: "12/14",
            },
            {
              name: "XL",
              correspond: "16",
            },
            {
              name: "XXL",
              correspond: "18",
            },
            {
              name: "XXS",
              correspond: "4",
            },
            {
              name: "Petite XXS",
              correspond: "4",
            },
            {
              name: "Petite XS",
              correspond: "6",
            },
            {
              name: "Petite S",
              correspond: "8",
            },
            {
              name: "Petite M",
              correspond: "10",
            },
            {
              name: "Petite L",
              correspond: "12/14",
            },
            {
              name: "Tall XS",
              correspond: "6",
            },
            {
              name: "Tall S",
              correspond: "8",
            },
            {
              name: "Tall M",
              correspond: "10",
            },
            {
              name: "Tall L",
              correspond: "12/14",
            },
            {
              name: "Tall XL",
              correspond: "16",
            },
            {
              name: "XXXL",
              correspond: "20",
            },
          ],
          US: [
            {
              name: "S",
              correspond: "4",
            },
            {
              name: "XS",
              correspond: "2",
            },
            {
              name: "M",
              correspond: "6",
            },
            {
              name: "L",
              correspond: "8/10",
            },
            {
              name: "XL",
              correspond: "12",
            },
            {
              name: "XXL",
              correspond: "14",
            },
            {
              name: "XXXL",
              correspond: "16",
            },
            {
              name: "XXS",
              correspond: "0",
            },
            {
              name: "Petite XXS",
              correspond: "0",
            },
            {
              name: "Petite XS",
              correspond: "2",
            },
            {
              name: "Petite S",
              correspond: "4",
            },
            {
              name: "Petite M",
              correspond: "6",
            },
            {
              name: "Petite L",
              correspond: "8/10",
            },
            {
              name: "Tall XS",
              correspond: "2",
            },
            {
              name: "Tall S",
              correspond: "4",
            },
            {
              name: "Tall M",
              correspond: "6",
            },
            {
              name: "Tall L",
              correspond: "8/10",
            },
            {
              name: "Tall XL",
              correspond: "12",
            },
          ],
          IT: [
            {
              name: "XS",
              correspond: "38",
            },
            {
              name: "S",
              correspond: "40",
            },
            {
              name: "M",
              correspond: "42",
            },
            {
              name: "L",
              correspond: "44/46",
            },
            {
              name: "XL",
              correspond: "48",
            },
            {
              name: "XXL",
              correspond: "50",
            },
            {
              name: "XXS",
              correspond: "36",
            },
            {
              name: "Petite XS",
              correspond: "38",
            },
            {
              name: "Petite S",
              correspond: "40",
            },
            {
              name: "Petite M",
              correspond: "42",
            },
            {
              name: "Petite L",
              correspond: "44/46",
            },
            {
              name: "Petite XXS",
              correspond: "36",
            },
            {
              name: "Tall XS",
              correspond: "38",
            },
            {
              name: "Tall S",
              correspond: "40",
            },
            {
              name: "Tall M",
              correspond: "42",
            },
            {
              name: "Tall L",
              correspond: "44/46",
            },
            {
              name: "Tall XL",
              correspond: "48",
            },
            {
              name: "XXXL",
              correspond: "52",
            },
          ],
          BR: [
            {
              name: "XS",
              correspond: "PP",
            },
            {
              name: "S",
              correspond: "P",
            },
            {
              name: "M",
              correspond: "M",
            },
            {
              name: "L",
              correspond: "G",
            },
            {
              name: "XL",
              correspond: "GG",
            },
            {
              name: "Petite XXS",
              correspond: "PPP",
            },
            {
              name: "Petite XS",
              correspond: "PP",
            },
            {
              name: "Petite S",
              correspond: "P",
            },
            {
              name: "Petite M",
              correspond: "M",
            },
            {
              name: "Petite L",
              correspond: "G",
            },
            {
              name: "Tall XS",
              correspond: "PP",
            },
            {
              name: "Tall S",
              correspond: "P",
            },
            {
              name: "Tall M",
              correspond: "M",
            },
            {
              name: "Tall L",
              correspond: "G",
            },
            {
              name: "Tall XL",
              correspond: "GG",
            },
            {
              name: "XXS",
              correspond: "XPP",
            },
            {
              name: "XXL",
              correspond: "EG",
            },
            {
              name: "XXXL",
              correspond: "EGG",
            },
          ],
        },
        category_name: "",
        skc_filter_time: "2019-08-20 00:00:00",
        config_id: 20,
        goods_id: 10137226,
      },
      tsp: {
        156: "",
        174: "MOTF",
        257: "ECO",
        1654: "",
        60003167: "",
        60004623: "",
      },
      more_goods_imgs: [],
      model: {
        attr: {
          Height: "178.0",
          Bust: "82.0",
          Waist: "62.0",
          Hip: "91.0",
          BallGirth: "0.0",
          FootLength: "0.0",
        },
        size: "S",
        name: "Monika J",
        image:
          "http://img.ltwebstatic.com/images3_pi/2022/07/13/1657677949c54f1fcc19795566c600a5cc23e385f9.jpg",
        attrcm: {
          Height: "178.0",
          Bust: "82.0",
          Waist: "62.0",
          Hip: "91.0",
          BallGirth: "0.0",
          FootLength: "0.0",
        },
        attrinch: {
          Height: "70.1",
          Bust: "32.3",
          Waist: "24.4",
          Hip: "35.8",
          BallGirth: "0.0",
          FootLength: "0.0",
        },
        sizeUnit: 0,
        shoesSize: {
          sizeValue: "40",
          sizeUnit: "EUR",
        },
      },
      gradeState: [
        {
          skc: "sw2107161258265010",
          goods_id: 10137226,
          new_product_unsale: 0,
        },
      ],
      getSeriesAndBrand: {
        skc: "sw2107161258265010",
        brand: {
          id: 17,
          name: "MOTF",
          corner_img_left:
            "http://img.ltwebstatic.com/images3_pi/2022/08/03/16595122063df87976bab7e09c6f66c85f1bd9eb61.png",
          corner_img_right: null,
          brand_logo:
            "http://img.ltwebstatic.com/images3_pi/2021/01/28/1611813536ca453aee43dacb7a2e114b6fe4bd7073.png",
          main_site: "shein",
          brand_code: "1mr5g",
          tsp_brand_left: 1,
        },
        series: {
          id: 7,
          name: "ECO",
          image_url:
            "http://img.ltwebstatic.com/images3_pi/2021/01/26/16116466129ee5f738693b223be8d7d6d9c9d21633.png",
          corner_img_left:
            "http://img.ltwebstatic.com/images3_pi/2021/07/31/1627731319f0f49c465cb2216778ec479d3237b119.png",
          corner_img_right:
            "http://img.ltwebstatic.com/images3_pi/2021/07/31/162773132815222afd575936fe48f3c1f23ac39a56.png",
          corner_img_light_left:
            "http://img.ltwebstatic.com/images3_pi/2022/08/03/1659512564ff28db59bff8ebe50723dc8a97912d24.png",
          corner_img_light_right:
            "http://img.ltwebstatic.com/images3_pi/2022/08/03/16595125670136fb819bdbaefa299404c91b5cb889.png",
          main_site: "shein",
          goods_id: null,
          tsp_series_left: 1,
          tsp_series_right: 1,
        },
        goods_id: 10137226,
      },
      relation_color: [
        {
          goods_id: "3257041",
          cat_id: "1738",
          goods_sn: "sw2107161258267763",
          goods_url_name: "MOTF ECO RECYCLED POLYESTER SWEETHEART NECK TOP",
          supplier_id: "1001549",
          goods_name: "MOTF ECO RECYCLED POLYESTER SWEETHEART NECK TOP",
          original_img:
            "//img.ltwebstatic.com/images3_pi/2021/08/31/1630393005e9369eaf3eb5c771ef61ae2f18f86776.jpg",
          is_init: "1",
          stock: "999",
          is_on_sale: "1",
          is_virtual_stock: "0",
          promotion: null,
          parent_id: "1766",
          supplier_top_category_id: "483",
          color_image:
            "//img.ltwebstatic.com/images3_pi/2021/08/31/163039302446bf3f7f0732bbbf10d2ea336a34946c.jpg",
          business_model: 0,
          store_code: 1,
          unit_discount: "30",
          is_clearance: 0,
          limit_count: "7",
          flash_goods: {
            is_flash_goods: 0,
          },
          color_type: "0",
          comment: {
            comment_num: "0",
            comment_rank: "0",
          },
          is_subscription: "0",
          is_pre_sale: "0",
          is_pre_sale_end: "0",
          is_stock_enough: "0",
          goods_thumb:
            "//img.ltwebstatic.com/images3_pi/2021/08/31/1630393005e9369eaf3eb5c771ef61ae2f18f86776_thumbnail_220x293.jpg",
          goods_img:
            "//img.ltwebstatic.com/images3_pi/2021/08/31/1630393005e9369eaf3eb5c771ef61ae2f18f86776_thumbnail_405x552.jpg",
          goods_img_webp:
            "//img.ltwebstatic.com/images3_pi/2021/08/31/1630393005e9369eaf3eb5c771ef61ae2f18f86776_thumbnail_405x552.webp",
          original_img_webp:
            "//img.ltwebstatic.com/images3_pi/2021/08/31/1630393005e9369eaf3eb5c771ef61ae2f18f86776.webp",
          brand: "MOTF",
          mall_code_list: [
            {
              mall_code: "1",
              mall_code_sort: 1,
            },
          ],
          isMultiPartProduct: 0,
          mainSaleAttrShowMode: 2,
          productRelationID: "w21071612582",
          retailPrice: {
            amount: "19.99",
            amountWithSymbol: "US$19.99",
            usdAmount: "19.99",
            usdAmountWithSymbol: "US$19.99",
          },
          salePrice: {
            amount: "13.99",
            amountWithSymbol: "US$13.99",
            usdAmount: "13.99",
            usdAmountWithSymbol: "US$13.99",
          },
          isPriceConfigured: 1,
          rewardPoints: 13,
          doublePoints: 0,
          beautyCategory: false,
          needAttrRelation: false,
          multiPartInfo: [],
          productDetails: [
            {
              attr_id: 1000411,
              attr_value_id: "1002451",
              attr_name: "Quantity",
              attr_name_en: "Quantity",
              value_sort: 1,
              attr_select: 1,
              attr_sort: 0,
              left_show: 1,
              attr_value: "1 piece",
              attr_value_en: "1 piece",
              attr_desc: "",
              attr_image: "",
            },
            {
              attr_id: 27,
              attr_value_id: "112",
              attr_name: "Color",
              attr_name_en: "Color",
              value_sort: 13,
              attr_select: 1,
              attr_sort: 2,
              left_show: 1,
              attr_value: "Black",
              attr_value_en: "Black",
              attr_desc: "",
              attr_image: "",
            },
            {
              attr_id: 101,
              attr_value_id: "257",
              attr_name: "Style",
              attr_name_en: "Style",
              value_sort: 7,
              attr_select: 1,
              attr_sort: 3,
              left_show: 1,
              attr_value: "Elegant",
              attr_value_en: "Elegant",
              attr_desc: "",
              attr_image: "",
            },
            {
              attr_id: 73,
              attr_value_id: "515",
              attr_name: "Pattern Type",
              attr_name_en: "Pattern Type",
              value_sort: 15,
              attr_select: 1,
              attr_sort: 4,
              left_show: 1,
              attr_value: "Plain",
              attr_value_en: "Plain",
              attr_desc: "",
              attr_image: "",
            },
            {
              attr_id: 66,
              attr_value_id: "660",
              attr_name: "Neckline",
              attr_name_en: "Neckline",
              value_sort: 0,
              attr_select: 1,
              attr_sort: 8,
              left_show: 1,
              attr_value: "Sweetheart",
              attr_value_en: "Sweetheart",
              attr_desc: "",
              attr_image: "",
            },
            {
              attr_id: 90,
              attr_value_id: "409",
              attr_name: "Sleeve Length",
              attr_name_en: "Sleeve Length",
              value_sort: 6,
              attr_select: 1,
              attr_sort: 9,
              left_show: 1,
              attr_value: "Long Sleeve",
              attr_value_en: "Long Sleeve",
              attr_desc: "",
              attr_image: "",
            },
            {
              attr_id: 31,
              attr_value_id: "1082",
              attr_name: "Details",
              attr_name_en: "Details",
              value_sort: 0,
              attr_select: 1,
              attr_sort: 9,
              left_show: 1,
              attr_value: "Rib-Knit",
              attr_value_en: "Rib-Knit",
              attr_desc: "",
              attr_image: "",
            },
            {
              attr_id: 31,
              attr_value_id: "1570",
              attr_name: "Details",
              attr_name_en: "Details",
              value_sort: 0,
              attr_select: 1,
              attr_sort: 9,
              left_show: 1,
              attr_value: "Button Front",
              attr_value_en: "Button Front",
              attr_desc: "",
              attr_image: "",
            },
            {
              attr_id: 92,
              attr_value_id: "892",
              attr_name: "Sleeve Type",
              attr_name_en: "Sleeve Type",
              value_sort: 0,
              attr_select: 1,
              attr_sort: 10,
              left_show: 1,
              attr_value: "Regular Sleeve",
              attr_value_en: "Regular Sleeve",
              attr_desc: "",
              attr_image: "",
            },
            {
              attr_id: 54,
              attr_value_id: "546",
              attr_name: "Length",
              attr_name_en: "Length",
              value_sort: 0,
              attr_select: 1,
              attr_sort: 12,
              left_show: 1,
              attr_value: "Regular",
              attr_value_en: "Regular",
              attr_desc: "",
              attr_image: "",
            },
            {
              attr_id: 40,
              attr_value_id: "613",
              attr_name: "Fit Type",
              attr_name_en: "Fit Type",
              value_sort: 0,
              attr_select: 1,
              attr_sort: 14,
              left_show: 1,
              attr_value: "Slim Fit",
              attr_value_en: "Slim Fit",
              attr_desc: "",
              attr_image: "",
            },
            {
              attr_id: 39,
              attr_value_id: "280",
              attr_name: "Fabric",
              attr_name_en: "Fabric",
              value_sort: 0,
              attr_select: 1,
              attr_sort: 18,
              left_show: 1,
              attr_value: "Slight Stretch",
              attr_value_en: "Slight Stretch",
              attr_desc: "",
              attr_image: "",
            },
            {
              attr_id: 160,
              attr_value_id: "731",
              attr_name: "Material",
              attr_name_en: "Material",
              value_sort: 1,
              attr_select: 1,
              attr_sort: 20,
              left_show: 1,
              attr_value: "Viscose",
              attr_value_en: "Viscose",
              attr_desc: "",
              attr_image: "",
            },
            {
              attr_id: 62,
              attr_value_id: "731",
              attr_name: "Composition",
              attr_name_en: "Composition",
              value_sort: 1,
              attr_select: 1,
              attr_sort: 22,
              left_show: 1,
              attr_value: "47% Viscose",
              attr_value_en: "47% Viscose",
              attr_desc: "",
              attr_image: "",
            },
            {
              attr_id: 62,
              attr_value_id: "212",
              attr_name: "Composition",
              attr_name_en: "Composition",
              value_sort: 1,
              attr_select: 1,
              attr_sort: 22,
              left_show: 1,
              attr_value: "43% Cotton",
              attr_value_en: "43% Cotton",
              attr_desc: "",
              attr_image: "",
            },
            {
              attr_id: 62,
              attr_value_id: "255",
              attr_name: "Composition",
              attr_name_en: "Composition",
              value_sort: 1,
              attr_select: 1,
              attr_sort: 22,
              left_show: 1,
              attr_value: "10% Elastane",
              attr_value_en: "10% Elastane",
              attr_desc: "",
              attr_image: "",
            },
            {
              attr_id: 1000069,
              attr_value_id: "1002238",
              attr_name: "Care Instructions",
              attr_name_en: "Care Instructions",
              value_sort: 1,
              attr_select: 1,
              attr_sort: 23,
              left_show: 1,
              attr_value: "Machine wash or professional dry clean",
              attr_value_en: "Machine wash or professional dry clean",
              attr_desc: "",
              attr_image: "",
            },
            {
              attr_id: 207,
              attr_value_id: "459",
              attr_name: "Sheer",
              attr_name_en: "Sheer",
              value_sort: 0,
              attr_select: 1,
              attr_sort: 28,
              left_show: 1,
              attr_value: "No",
              attr_value_en: "No",
              attr_desc: "",
              attr_image: "",
            },
          ],
          mainSaleAttribute: [
            {
              attr_id: 27,
              attr_value_id: "112",
              attr_name: "Color",
              attr_name_en: "Color",
              value_sort: 13,
              attr_select: 1,
              attr_sort: 2,
              left_show: 1,
              attr_value: "Black",
              attr_value_en: "Black",
              attr_desc: "",
              attr_image: "",
            },
          ],
          promotionInfo: [
            {
              id: "216685",
              typeId: "3",
              buyLimit: "0",
              discountValue: "0.7",
              vcId: "",
              endTime: "2022-08-22 17:00:00",
              ruleType: "discount",
              isReturn: "1",
              scId: "02585570",
              isOver: "",
              mall_code: "1",
            },
          ],
          relatedColor: [
            {
              goods_id: "3257041",
              goods_relation_id: "w21071612582",
              goods_color_image:
                "//img.ltwebstatic.com/images3_pi/2021/08/31/163039302446bf3f7f0732bbbf10d2ea336a34946c.jpg",
              cat_id: "1738",
              original_img:
                "//img.ltwebstatic.com/images3_pi/2021/08/31/1630393005e9369eaf3eb5c771ef61ae2f18f86776.jpg",
              goods_sn: "sw2107161258267763",
              goods_thumb:
                "//img.ltwebstatic.com/images3_pi/2021/08/31/1630393005e9369eaf3eb5c771ef61ae2f18f86776_thumbnail_220x293.jpg",
              goods_url_name: "MOTF ECO RECYCLED POLYESTER SWEETHEART NECK TOP",
              goods_img:
                "//img.ltwebstatic.com/images3_pi/2021/08/31/1630393005e9369eaf3eb5c771ef61ae2f18f86776_thumbnail_405x552.jpg",
              goods_name: "MOTF ECO RECYCLED POLYESTER SWEETHEART NECK TOP",
              spu_image: "",
              business_model: 0,
              store_code: 1,
              mall_code_list: [
                {
                  mall_code: "1",
                  mall_code_sort: 1,
                },
              ],
            },
            {
              goods_id: "10137226",
              goods_relation_id: "w21071612582",
              goods_color_image:
                "//img.ltwebstatic.com/images3_pi/2022/03/28/1648434099faaa1cfb0d7b9a2a7af25af28b72b9ce.jpg",
              cat_id: "1738",
              original_img:
                "//img.ltwebstatic.com/images3_pi/2022/03/28/1648434082427d7e24e5352d7854122e64ceb5f5a4.jpg",
              goods_sn: "sw2107161258265010",
              goods_thumb:
                "//img.ltwebstatic.com/images3_pi/2022/03/28/1648434082427d7e24e5352d7854122e64ceb5f5a4_thumbnail_220x293.jpg",
              goods_url_name: "MOTF ECO RECYCLED POLYESTER SWEETHEART NECK TOP",
              goods_img:
                "//img.ltwebstatic.com/images3_pi/2022/03/28/1648434082427d7e24e5352d7854122e64ceb5f5a4_thumbnail_405x552.jpg",
              goods_name: "MOTF ECO RECYCLED POLYESTER SWEETHEART NECK TOP",
              spu_image: "",
              business_model: 0,
              store_code: 1,
              mall_code_list: [
                {
                  mall_code: "1",
                  mall_code_sort: 1,
                },
              ],
            },
          ],
          sizeTemplate: {
            image_url:
              "http://img.ltwebstatic.com/images3_pi/2021/12/01/1638328456aad2b14ab0f3684cd0a754e4f7bb4a4d.png",
            description_multi: [
              {
                sort: 1,
                name: "Shoulder",
                description:
                  "Measure from where the shoulder seam meets the sleeve on one side to another side.",
              },
              {
                sort: 2,
                name: "Bust",
                description:
                  "Measure from the stitches below the armpits on one side to another.",
              },
              {
                sort: 3,
                name: "Length",
                description:
                  "Measure from where the shoulder seam meets the collar to the hem.",
              },
              {
                sort: 4,
                name: "Sleeves",
                description:
                  "Measure from where the shoulder seam meets armhole to the cuff. ",
              },
            ],
          },
          mall_stock: [
            {
              stock: 999,
              mall_code: "1",
            },
          ],
          mall_prices: [
            {
              mall_code: "1",
              retailPrice: {
                amount: "19.99",
                amountWithSymbol: "US$19.99",
                usdAmount: "19.99",
                usdAmountWithSymbol: "US$19.99",
              },
              salePrice: {
                amount: "13.99",
                amountWithSymbol: "US$13.99",
                usdAmount: "13.99",
                usdAmountWithSymbol: "US$13.99",
              },
              unit_discount: 30,
            },
          ],
          mall_code: "1",
        },
      ],
      goods_imgs: {
        main_image: {
          origin_image:
            "//img.ltwebstatic.com/images3_pi/2022/03/28/1648434082427d7e24e5352d7854122e64ceb5f5a4.jpg",
          medium_image:
            "//img.ltwebstatic.com/images3_pi/2022/03/28/1648434082427d7e24e5352d7854122e64ceb5f5a4_thumbnail_405x552.jpg",
          thumbnail:
            "//img.ltwebstatic.com/images3_pi/2022/03/28/1648434082427d7e24e5352d7854122e64ceb5f5a4_thumbnail_220x293.jpg",
          thumbnail_webp:
            "//img.ltwebstatic.com/images3_pi/2022/03/28/1648434082427d7e24e5352d7854122e64ceb5f5a4_thumbnail_220x293.webp",
          origin_image_webp:
            "//img.ltwebstatic.com/images3_pi/2022/03/28/1648434082427d7e24e5352d7854122e64ceb5f5a4.webp",
          medium_image_webp:
            "//img.ltwebstatic.com/images3_pi/2022/03/28/1648434082427d7e24e5352d7854122e64ceb5f5a4_thumbnail_405x552.webp",
        },
        detail_image: [
          {
            origin_image:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/1648434084895d1cfb0dab9da0dbc3eac04c7df9d6.jpg",
            medium_image:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/1648434084895d1cfb0dab9da0dbc3eac04c7df9d6_thumbnail_405x552.jpg",
            thumbnail:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/1648434084895d1cfb0dab9da0dbc3eac04c7df9d6_thumbnail_220x293.jpg",
            thumbnail_webp:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/1648434084895d1cfb0dab9da0dbc3eac04c7df9d6_thumbnail_220x293.webp",
            origin_image_webp:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/1648434084895d1cfb0dab9da0dbc3eac04c7df9d6.webp",
            medium_image_webp:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/1648434084895d1cfb0dab9da0dbc3eac04c7df9d6_thumbnail_405x552.webp",
          },
          {
            origin_image:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/16484340866acae2eeb74a55a01703eef319b4ca16.jpg",
            medium_image:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/16484340866acae2eeb74a55a01703eef319b4ca16_thumbnail_405x552.jpg",
            thumbnail:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/16484340866acae2eeb74a55a01703eef319b4ca16_thumbnail_220x293.jpg",
            thumbnail_webp:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/16484340866acae2eeb74a55a01703eef319b4ca16_thumbnail_220x293.webp",
            origin_image_webp:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/16484340866acae2eeb74a55a01703eef319b4ca16.webp",
            medium_image_webp:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/16484340866acae2eeb74a55a01703eef319b4ca16_thumbnail_405x552.webp",
          },
          {
            origin_image:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/16484340886e7bcedad20f4c1f51dd17148a67063c.jpg",
            medium_image:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/16484340886e7bcedad20f4c1f51dd17148a67063c_thumbnail_405x552.jpg",
            thumbnail:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/16484340886e7bcedad20f4c1f51dd17148a67063c_thumbnail_220x293.jpg",
            thumbnail_webp:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/16484340886e7bcedad20f4c1f51dd17148a67063c_thumbnail_220x293.webp",
            origin_image_webp:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/16484340886e7bcedad20f4c1f51dd17148a67063c.webp",
            medium_image_webp:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/16484340886e7bcedad20f4c1f51dd17148a67063c_thumbnail_405x552.webp",
          },
          {
            origin_image:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/1648434091cab027362724e1de16f76a3124eb26bc.jpg",
            medium_image:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/1648434091cab027362724e1de16f76a3124eb26bc_thumbnail_405x552.jpg",
            thumbnail:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/1648434091cab027362724e1de16f76a3124eb26bc_thumbnail_220x293.jpg",
            thumbnail_webp:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/1648434091cab027362724e1de16f76a3124eb26bc_thumbnail_220x293.webp",
            origin_image_webp:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/1648434091cab027362724e1de16f76a3124eb26bc.webp",
            medium_image_webp:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/1648434091cab027362724e1de16f76a3124eb26bc_thumbnail_405x552.webp",
          },
          {
            origin_image:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/16484340931db6b9783287b15254aa7277352af6a2.jpg",
            medium_image:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/16484340931db6b9783287b15254aa7277352af6a2_thumbnail_405x552.jpg",
            thumbnail:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/16484340931db6b9783287b15254aa7277352af6a2_thumbnail_220x293.jpg",
            thumbnail_webp:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/16484340931db6b9783287b15254aa7277352af6a2_thumbnail_220x293.webp",
            origin_image_webp:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/16484340931db6b9783287b15254aa7277352af6a2.webp",
            medium_image_webp:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/16484340931db6b9783287b15254aa7277352af6a2_thumbnail_405x552.webp",
          },
          {
            origin_image:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/1648434094917f189addf74de4d77ef0496b294823.jpg",
            medium_image:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/1648434094917f189addf74de4d77ef0496b294823_thumbnail_405x552.jpg",
            thumbnail:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/1648434094917f189addf74de4d77ef0496b294823_thumbnail_220x293.jpg",
            thumbnail_webp:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/1648434094917f189addf74de4d77ef0496b294823_thumbnail_220x293.webp",
            origin_image_webp:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/1648434094917f189addf74de4d77ef0496b294823.webp",
            medium_image_webp:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/1648434094917f189addf74de4d77ef0496b294823_thumbnail_405x552.webp",
          },
          {
            origin_image:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/1648434096e16977d86750c6d92f3bea3ac004f0a7.jpg",
            medium_image:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/1648434096e16977d86750c6d92f3bea3ac004f0a7_thumbnail_405x552.jpg",
            thumbnail:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/1648434096e16977d86750c6d92f3bea3ac004f0a7_thumbnail_220x293.jpg",
            thumbnail_webp:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/1648434096e16977d86750c6d92f3bea3ac004f0a7_thumbnail_220x293.webp",
            origin_image_webp:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/1648434096e16977d86750c6d92f3bea3ac004f0a7.webp",
            medium_image_webp:
              "//img.ltwebstatic.com/images3_pi/2022/03/28/1648434096e16977d86750c6d92f3bea3ac004f0a7_thumbnail_405x552.webp",
          },
        ],
        video_url: "",
      },
      localSizeList: {
        category_id: 0,
        supplier_category_id: 0,
        skc: "sw2107161258265010",
        size_rule_list: [],
        country_code: "",
        category_name: "",
        skc_filter_time: null,
        config_id: null,
        goods_id: 10137226,
      },
      skcSort: {
        sw2107161258267763: 0,
        sw2107161258265010: 0,
      },
      attrSizeList: {
        sale_attr_list: {
          10137226: {
            goods_id: "10137226",
            goods_sn: "sw2107161258265010",
            skc_name: "sw2107161258265010",
            sku_list: [
              {
                sku_code: "I923iz7dhs3e",
                stock: 999,
                mall_stock: [
                  {
                    mall_code: "1",
                    stock: 999,
                    mall_code_sort: 1,
                  },
                ],
                sku_sale_attr: [
                  {
                    attr_id: 87,
                    attr_name: "Size",
                    attr_name_en: "Size",
                    attr_value_id: 755,
                    attr_value_name: "XS",
                    attr_value_name_en: "XS",
                    attr_std_value: "",
                  },
                ],
                price: {
                  retailPrice: {
                    amount: "19.99",
                    amountWithSymbol: "US$19.99",
                    usdAmount: "19.99",
                    usdAmountWithSymbol: "US$19.99",
                  },
                  salePrice: {
                    amount: "13.99",
                    amountWithSymbol: "US$13.99",
                    usdAmount: "13.99",
                    usdAmountWithSymbol: "US$13.99",
                  },
                  unit_discount: "30",
                },
                mall_price: [
                  {
                    mall_code: "1",
                    retailPrice: {
                      amount: "19.99",
                      amountWithSymbol: "US$19.99",
                      usdAmount: "19.99",
                      usdAmountWithSymbol: "US$19.99",
                    },
                    salePrice: {
                      amount: "13.99",
                      amountWithSymbol: "US$13.99",
                      usdAmount: "13.99",
                      usdAmountWithSymbol: "US$13.99",
                    },
                    unit_discount: 30,
                    rewardPoints: 13,
                  },
                ],
                rewardPoints: 13,
                doublePoints: 0,
              },
              {
                sku_code: "I923iz7djc19",
                stock: 999,
                mall_stock: [
                  {
                    mall_code: "1",
                    stock: 999,
                    mall_code_sort: 1,
                  },
                ],
                sku_sale_attr: [
                  {
                    attr_id: 87,
                    attr_name: "Size",
                    attr_name_en: "Size",
                    attr_value_id: 568,
                    attr_value_name: "S",
                    attr_value_name_en: "S",
                    attr_std_value: "",
                  },
                ],
                price: {
                  retailPrice: {
                    amount: "19.99",
                    amountWithSymbol: "US$19.99",
                    usdAmount: "19.99",
                    usdAmountWithSymbol: "US$19.99",
                  },
                  salePrice: {
                    amount: "13.99",
                    amountWithSymbol: "US$13.99",
                    usdAmount: "13.99",
                    usdAmountWithSymbol: "US$13.99",
                  },
                  unit_discount: "30",
                },
                mall_price: [
                  {
                    mall_code: "1",
                    retailPrice: {
                      amount: "19.99",
                      amountWithSymbol: "US$19.99",
                      usdAmount: "19.99",
                      usdAmountWithSymbol: "US$19.99",
                    },
                    salePrice: {
                      amount: "13.99",
                      amountWithSymbol: "US$13.99",
                      usdAmount: "13.99",
                      usdAmountWithSymbol: "US$13.99",
                    },
                    unit_discount: 30,
                    rewardPoints: 13,
                  },
                ],
                rewardPoints: 13,
                doublePoints: 0,
              },
              {
                sku_code: "I923iz7dkvrb",
                stock: 999,
                mall_stock: [
                  {
                    mall_code: "1",
                    stock: 999,
                    mall_code_sort: 1,
                  },
                ],
                sku_sale_attr: [
                  {
                    attr_id: 87,
                    attr_name: "Size",
                    attr_name_en: "Size",
                    attr_value_id: 417,
                    attr_value_name: "M",
                    attr_value_name_en: "M",
                    attr_std_value: "",
                  },
                ],
                price: {
                  retailPrice: {
                    amount: "19.99",
                    amountWithSymbol: "US$19.99",
                    usdAmount: "19.99",
                    usdAmountWithSymbol: "US$19.99",
                  },
                  salePrice: {
                    amount: "13.99",
                    amountWithSymbol: "US$13.99",
                    usdAmount: "13.99",
                    usdAmountWithSymbol: "US$13.99",
                  },
                  unit_discount: "30",
                },
                mall_price: [
                  {
                    mall_code: "1",
                    retailPrice: {
                      amount: "19.99",
                      amountWithSymbol: "US$19.99",
                      usdAmount: "19.99",
                      usdAmountWithSymbol: "US$19.99",
                    },
                    salePrice: {
                      amount: "13.99",
                      amountWithSymbol: "US$13.99",
                      usdAmount: "13.99",
                      usdAmountWithSymbol: "US$13.99",
                    },
                    unit_discount: 30,
                    rewardPoints: 13,
                  },
                ],
                rewardPoints: 13,
                doublePoints: 0,
              },
              {
                sku_code: "I923iz7dm9xx",
                stock: 0,
                mall_stock: [
                  {
                    mall_code: "1",
                    stock: 0,
                    mall_code_sort: 1,
                  },
                ],
                sku_sale_attr: [
                  {
                    attr_id: 87,
                    attr_name: "Size",
                    attr_name_en: "Size",
                    attr_value_id: 387,
                    attr_value_name: "L",
                    attr_value_name_en: "L",
                    attr_std_value: "",
                  },
                ],
                price: {
                  retailPrice: {
                    amount: "19.99",
                    amountWithSymbol: "US$19.99",
                    usdAmount: "19.99",
                    usdAmountWithSymbol: "US$19.99",
                  },
                  salePrice: {
                    amount: "13.99",
                    amountWithSymbol: "US$13.99",
                    usdAmount: "13.99",
                    usdAmountWithSymbol: "US$13.99",
                  },
                  unit_discount: "30",
                },
                mall_price: [
                  {
                    mall_code: "1",
                    retailPrice: {
                      amount: "19.99",
                      amountWithSymbol: "US$19.99",
                      usdAmount: "19.99",
                      usdAmountWithSymbol: "US$19.99",
                    },
                    salePrice: {
                      amount: "13.99",
                      amountWithSymbol: "US$13.99",
                      usdAmount: "13.99",
                      usdAmountWithSymbol: "US$13.99",
                    },
                    unit_discount: 30,
                    rewardPoints: 13,
                  },
                ],
                rewardPoints: 13,
                doublePoints: 0,
              },
            ],
            skc_sale_attr: [
              {
                attr_id: 87,
                attr_name: "Size",
                attr_value_list: [
                  {
                    attr_value_id: 755,
                    attr_value_name: "XS",
                    attr_value_name_en: "XS",
                    attr_std_value: "",
                  },
                  {
                    attr_value_id: 568,
                    attr_value_name: "S",
                    attr_value_name_en: "S",
                    attr_std_value: "",
                  },
                  {
                    attr_value_id: 417,
                    attr_value_name: "M",
                    attr_value_name_en: "M",
                    attr_std_value: "",
                  },
                  {
                    attr_value_id: 387,
                    attr_value_name: "L",
                    attr_value_name_en: "L",
                    attr_std_value: "",
                  },
                ],
              },
            ],
          },
        },
        attrSize: [],
      },
      detail: {
        brand: "MOTF",
        sizeTemplate: {
          image_url:
            "http://img.ltwebstatic.com/images3_pi/2021/12/01/1638328456aad2b14ab0f3684cd0a754e4f7bb4a4d.png",
          description_multi: [
            {
              sort: 1,
              name: "Shoulder",
              description:
                "Measure from where the shoulder seam meets the sleeve on one side to another side.",
            },
            {
              sort: 2,
              name: "Bust",
              description:
                "Measure from the stitches below the armpits on one side to another.",
            },
            {
              sort: 3,
              name: "Length",
              description:
                "Measure from where the shoulder seam meets the collar to the hem.",
            },
            {
              sort: 4,
              name: "Sleeves",
              description:
                "Measure from where the shoulder seam meets armhole to the cuff. ",
            },
          ],
        },
        stock: "999",
        isMultiPartProduct: 0,
        multiPartInfo: [],
        mainSaleAttrShowMode: 2,
        productDetails: [
          {
            attr_id: 1000411,
            attr_value_id: "1002451",
            attr_name: "Quantity",
            attr_name_en: "Quantity",
            value_sort: 1,
            attr_select: 1,
            attr_sort: 0,
            left_show: 1,
            attr_value: "1 piece",
            attr_value_en: "1 piece",
            attr_desc: "",
            attr_image: "",
          },
          {
            attr_id: 27,
            attr_value_id: "140",
            attr_name: "Color",
            attr_name_en: "Color",
            value_sort: 0,
            attr_select: 1,
            attr_sort: 2,
            left_show: 1,
            attr_value: "Brown",
            attr_value_en: "Brown",
            attr_desc: "",
            attr_image: "",
          },
          {
            attr_id: 101,
            attr_value_id: "257",
            attr_name: "Style",
            attr_name_en: "Style",
            value_sort: 7,
            attr_select: 1,
            attr_sort: 3,
            left_show: 1,
            attr_value: "Elegant",
            attr_value_en: "Elegant",
            attr_desc: "",
            attr_image: "",
          },
          {
            attr_id: 73,
            attr_value_id: "515",
            attr_name: "Pattern Type",
            attr_name_en: "Pattern Type",
            value_sort: 15,
            attr_select: 1,
            attr_sort: 4,
            left_show: 1,
            attr_value: "Plain",
            attr_value_en: "Plain",
            attr_desc: "",
            attr_image: "",
          },
          {
            attr_id: 66,
            attr_value_id: "660",
            attr_name: "Neckline",
            attr_name_en: "Neckline",
            value_sort: 0,
            attr_select: 1,
            attr_sort: 8,
            left_show: 1,
            attr_value: "Sweetheart",
            attr_value_en: "Sweetheart",
            attr_desc: "",
            attr_image: "",
          },
          {
            attr_id: 90,
            attr_value_id: "409",
            attr_name: "Sleeve Length",
            attr_name_en: "Sleeve Length",
            value_sort: 6,
            attr_select: 1,
            attr_sort: 9,
            left_show: 1,
            attr_value: "Long Sleeve",
            attr_value_en: "Long Sleeve",
            attr_desc: "",
            attr_image: "",
          },
          {
            attr_id: 31,
            attr_value_id: "1082",
            attr_name: "Details",
            attr_name_en: "Details",
            value_sort: 0,
            attr_select: 1,
            attr_sort: 9,
            left_show: 1,
            attr_value: "Rib-Knit",
            attr_value_en: "Rib-Knit",
            attr_desc: "",
            attr_image: "",
          },
          {
            attr_id: 31,
            attr_value_id: "1570",
            attr_name: "Details",
            attr_name_en: "Details",
            value_sort: 0,
            attr_select: 1,
            attr_sort: 9,
            left_show: 1,
            attr_value: "Button Front",
            attr_value_en: "Button Front",
            attr_desc: "",
            attr_image: "",
          },
          {
            attr_id: 92,
            attr_value_id: "892",
            attr_name: "Sleeve Type",
            attr_name_en: "Sleeve Type",
            value_sort: 0,
            attr_select: 1,
            attr_sort: 10,
            left_show: 1,
            attr_value: "Regular Sleeve",
            attr_value_en: "Regular Sleeve",
            attr_desc: "",
            attr_image: "",
          },
          {
            attr_id: 54,
            attr_value_id: "546",
            attr_name: "Length",
            attr_name_en: "Length",
            value_sort: 0,
            attr_select: 1,
            attr_sort: 12,
            left_show: 1,
            attr_value: "Regular",
            attr_value_en: "Regular",
            attr_desc: "",
            attr_image: "",
          },
          {
            attr_id: 40,
            attr_value_id: "613",
            attr_name: "Fit Type",
            attr_name_en: "Fit Type",
            value_sort: 0,
            attr_select: 1,
            attr_sort: 14,
            left_show: 1,
            attr_value: "Slim Fit",
            attr_value_en: "Slim Fit",
            attr_desc: "",
            attr_image: "",
          },
          {
            attr_id: 39,
            attr_value_id: "280",
            attr_name: "Fabric",
            attr_name_en: "Fabric",
            value_sort: 0,
            attr_select: 1,
            attr_sort: 18,
            left_show: 1,
            attr_value: "Slight Stretch",
            attr_value_en: "Slight Stretch",
            attr_desc: "",
            attr_image: "",
          },
          {
            attr_id: 160,
            attr_value_id: "731",
            attr_name: "Material",
            attr_name_en: "Material",
            value_sort: 1,
            attr_select: 1,
            attr_sort: 20,
            left_show: 1,
            attr_value: "Viscose",
            attr_value_en: "Viscose",
            attr_desc: "",
            attr_image: "",
          },
          {
            attr_id: 62,
            attr_value_id: "731",
            attr_name: "Composition",
            attr_name_en: "Composition",
            value_sort: 1,
            attr_select: 1,
            attr_sort: 22,
            left_show: 1,
            attr_value: "47% Viscose",
            attr_value_en: "47% Viscose",
            attr_desc: "",
            attr_image: "",
          },
          {
            attr_id: 62,
            attr_value_id: "212",
            attr_name: "Composition",
            attr_name_en: "Composition",
            value_sort: 1,
            attr_select: 1,
            attr_sort: 22,
            left_show: 1,
            attr_value: "43% Cotton",
            attr_value_en: "43% Cotton",
            attr_desc: "",
            attr_image: "",
          },
          {
            attr_id: 62,
            attr_value_id: "255",
            attr_name: "Composition",
            attr_name_en: "Composition",
            value_sort: 1,
            attr_select: 1,
            attr_sort: 22,
            left_show: 1,
            attr_value: "10% Elastane",
            attr_value_en: "10% Elastane",
            attr_desc: "",
            attr_image: "",
          },
          {
            attr_id: 1000069,
            attr_value_id: "1002238",
            attr_name: "Care Instructions",
            attr_name_en: "Care Instructions",
            value_sort: 1,
            attr_select: 1,
            attr_sort: 23,
            left_show: 1,
            attr_value: "Machine wash or professional dry clean",
            attr_value_en: "Machine wash or professional dry clean",
            attr_desc: "",
            attr_image: "",
          },
          {
            attr_id: 207,
            attr_value_id: "459",
            attr_name: "Sheer",
            attr_name_en: "Sheer",
            value_sort: 0,
            attr_select: 1,
            attr_sort: 28,
            left_show: 1,
            attr_value: "No",
            attr_value_en: "No",
            attr_desc: "",
            attr_image: "",
          },
        ],
        mainSaleAttribute: [
          {
            attr_id: 27,
            attr_value_id: "140",
            attr_name: "Color",
            attr_name_en: "Color",
            value_sort: 0,
            attr_select: 1,
            attr_sort: 2,
            left_show: 1,
            attr_value: "Brown",
            attr_value_en: "Brown",
            attr_desc: "",
            attr_image: "",
          },
        ],
        comment: {
          comment_num: "0",
          comment_rank: "0",
        },
        promotionInfo: [
          {
            id: "216685",
            typeId: "3",
            buyLimit: "0",
            discountValue: "0.7",
            vcId: "",
            endTime: "2022-08-22 17:00:00",
            ruleType: "discount",
            isReturn: "1",
            scId: "02585570",
            isOver: "",
            mall_code: "1",
          },
        ],
        promotion: null,
        productRelationID: "w21071612582",
        retailPrice: {
          amount: "19.99",
          amountWithSymbol: "US$19.99",
          usdAmount: "19.99",
          usdAmountWithSymbol: "US$19.99",
        },
        salePrice: {
          amount: "13.99",
          amountWithSymbol: "US$13.99",
          usdAmount: "13.99",
          usdAmountWithSymbol: "US$13.99",
        },
        isPriceConfigured: 1,
        appPromotion: [],
        rewardPoints: 13,
        doublePoints: 0,
        beautyCategory: false,
        needAttrRelation: false,
        goods_id: "10137226",
        cat_id: "1738",
        goods_sn: "sw2107161258265010",
        goods_url_name: "MOTF ECO RECYCLED POLYESTER SWEETHEART NECK TOP",
        supplier_id: "1223",
        goods_name: "MOTF ECO RECYCLED POLYESTER SWEETHEART NECK TOP",
        original_img:
          "//img.ltwebstatic.com/images3_pi/2022/03/28/1648434082427d7e24e5352d7854122e64ceb5f5a4.jpg",
        is_stock_enough: "1",
        goods_thumb:
          "//img.ltwebstatic.com/images3_pi/2022/03/28/1648434082427d7e24e5352d7854122e64ceb5f5a4_thumbnail_220x293.jpg",
        goods_img:
          "//img.ltwebstatic.com/images3_pi/2022/03/28/1648434082427d7e24e5352d7854122e64ceb5f5a4_thumbnail_405x552.jpg",
        goods_desc: "",
        supplier_top_category_id: "2",
        parent_id: "1766",
        is_on_sale: "1",
        is_virtual_stock: "0",
        is_init: "1",
        is_pre_sale: "0",
        is_pre_sale_end: "0",
        is_subscription: "0",
        color_image:
          "//img.ltwebstatic.com/images3_pi/2022/03/28/1648434099faaa1cfb0d7b9a2a7af25af28b72b9ce.jpg",
        store_code: 1,
        business_model: 0,
        goods_img_webp:
          "//img.ltwebstatic.com/images3_pi/2022/03/28/1648434082427d7e24e5352d7854122e64ceb5f5a4_thumbnail_405x552.webp",
        original_img_webp:
          "//img.ltwebstatic.com/images3_pi/2022/03/28/1648434082427d7e24e5352d7854122e64ceb5f5a4.webp",
        unit_discount: "30",
        special_price_old: {
          amount: "13.99",
          amountWithSymbol: "US$13.99",
          usdAmount: "13.99",
          usdAmountWithSymbol: "US$13.99",
        },
        is_clearance: 0,
        limit_count: "7",
        flash_goods: {
          is_flash_goods: 0,
        },
        color_type: "0",
        mall_info: [
          {
            mall_code: "1",
            mall_name: "mall",
            mall_sort: 1,
            mall_code_sort: 1,
            retailPrice: {
              amount: "19.99",
              amountWithSymbol: "US$19.99",
              usdAmount: "19.99",
              usdAmountWithSymbol: "US$19.99",
            },
            salePrice: {
              amount: "13.99",
              amountWithSymbol: "US$13.99",
              usdAmount: "13.99",
              usdAmountWithSymbol: "US$13.99",
            },
            unit_discount: 30,
            stock: 999,
            enable_flag: 1,
            mall_tags: "1",
            language_mall_name: "mall",
            show_flag: 0,
            appPromotion: [],
            promotionInfo: [],
          },
        ],
        mall_prices: [
          {
            mall_code: "1",
            retailPrice: {
              amount: "19.99",
              amountWithSymbol: "US$19.99",
              usdAmount: "19.99",
              usdAmountWithSymbol: "US$19.99",
            },
            salePrice: {
              amount: "13.99",
              amountWithSymbol: "US$13.99",
              usdAmount: "13.99",
              usdAmountWithSymbol: "US$13.99",
            },
            unit_discount: 30,
          },
        ],
        mall_stock: [
          {
            stock: 999,
            mall_code: "1",
          },
        ],
        brandInfo: {
          id: 17,
          name: "MOTF",
          corner_img_left:
            "http://img.ltwebstatic.com/images3_pi/2022/08/03/16595122063df87976bab7e09c6f66c85f1bd9eb61.png",
          corner_img_right: null,
          brand_logo:
            "http://img.ltwebstatic.com/images3_pi/2021/01/28/1611813536ca453aee43dacb7a2e114b6fe4bd7073.png",
          main_site: "shein",
          brand_code: "1mr5g",
          tsp_brand_left: 1,
        },
        series: {
          id: 7,
          name: "ECO",
          image_url:
            "http://img.ltwebstatic.com/images3_pi/2021/01/26/16116466129ee5f738693b223be8d7d6d9c9d21633.png",
          corner_img_left:
            "http://img.ltwebstatic.com/images3_pi/2021/07/31/1627731319f0f49c465cb2216778ec479d3237b119.png",
          corner_img_right:
            "http://img.ltwebstatic.com/images3_pi/2021/07/31/162773132815222afd575936fe48f3c1f23ac39a56.png",
          corner_img_light_left:
            "http://img.ltwebstatic.com/images3_pi/2022/08/03/1659512564ff28db59bff8ebe50723dc8a97912d24.png",
          corner_img_light_right:
            "http://img.ltwebstatic.com/images3_pi/2022/08/03/16595125670136fb819bdbaefa299404c91b5cb889.png",
          main_site: "shein",
          goods_id: null,
          tsp_series_left: 1,
          tsp_series_right: 1,
        },
        mall: {
          1: {
            mall_code: "1",
            mall_name: "mall",
            mall_sort: 1,
            mall_code_sort: 1,
            retailPrice: {
              amount: "19.99",
              amountWithSymbol: "US$19.99",
              usdAmount: "19.99",
              usdAmountWithSymbol: "US$19.99",
            },
            salePrice: {
              amount: "13.99",
              amountWithSymbol: "US$13.99",
              usdAmount: "13.99",
              usdAmountWithSymbol: "US$13.99",
            },
            unit_discount: 30,
            stock: 999,
            enable_flag: 1,
            mall_tags: "1",
            language_mall_name: "mall",
            show_flag: 0,
            appPromotion: [],
            promotionInfo: [],
          },
        },
      },
      commentInfoLocal: {},
      afterPayInfo: {},
      currentCat: {
        cat_id: "1738",
        site_id: "7",
        url_cat_id: "1738",
        cat_url_name: "Women T-Shirts",
        goods_type_id: "0",
        show_in_nav: "1",
        image: "",
        image_app: "",
        parent_id: "1766",
        sort_order: "0",
        is_leaf: "1",
        is_return: "1",
        cat_name: "Women T-Shirts",
        meta_title: "",
        meta_keywords: "",
        meta_description: "",
        cat_desc: "",
        category_description_seo: "",
        left_description: "",
        language_flag: "en",
      },
      hotColorList: {
        3257041: {
          hot_color: "0",
          new_arrival_28: "0",
          tag: "60001065,60001145,60001168,60001208,60001239,60001360,60001489,60001869,60001872,6000240,6000265,60002654,60002655,60002672,60003023,60003085,60003255,6000344,60003514,60003517,60003532,60003533,60003534,60003539,6000354,60003540,6000356,60003562,6000383,60003904,60003981,6000402,6000403,60004063,60004264,60004354,60004355,60004356,60004357,60004473,60004474,60004605,6000464,60004691,60004786,6000511,6000545,60005501,60005545,6000571,6000574,6000585,6000587,6000723,6000839,6000863,6000968,6000975,6000980,70007002,70007010,70007012",
          c7d_top_wishlist_uv: "4454",
          current_top_browsing_uv: "",
          c7d_top_checkout_uv: "",
        },
        10137226: {
          hot_color: "0",
          new_arrival_28: "0",
          tag: "60001065,60001145,60001168,60001208,60001239,60001489,60001869,60001872,6000240,6000265,60002672,60003023,60003085,60003126,60003255,6000344,6000383,60003904,60003981,6000402,6000403,60004063,60004264,60004353,60004473,60004474,60004514,60004605,6000464,60004691,60004784,6000511,6000545,60005501,60005545,6000585,6000587,6000689,6000723,6000839,6000863,6000968,6000975,6000980,70007009,70007012,70007014",
          c7d_top_wishlist_uv: "4454",
          current_top_browsing_uv: "",
          c7d_top_checkout_uv: "",
        },
      },
      getItemPlusSize: {},
      commentInfo: {
        spu: "w21071612582",
        goods_id: null,
        comment_num: 565,
        comment_rank_average: "4.87",
        percent_overall_fit: {
          true_size: "93%",
          large: "1%",
          small: "6%",
        },
      },
      metaInfo: {
        meta_title: "MOTF ECO RECYCLED POLYESTER SWEETHEART NECK TOP -SHEIN",
        meta_keywords: "MOTF ECO RECYCLED POLYESTER SWEETHEART NECK TOP -SHEIN",
        meta_description:
          "Shop MOTF ECO RECYCLED POLYESTER SWEETHEART NECK TOP online. SHEIN offers MOTF ECO RECYCLED POLYESTER SWEETHEART NECK TOP & more to fit your fashionable needs.",
      },
      getBeautyGoodsDesc: {
        goodsDesc: "",
        goodsComponent: "",
        beautyCategory: 0,
      },
      parentCats: {
        cat_id: "2030",
        url_cat_id: "2030",
        goods_type_id: "0",
        cat_url_name: "Women Clothing",
        cat_name: "Women Clothing",
        parent_id: "0",
        sort_order: "0",
        is_leaf: "0",
        goods_num: "0",
        multi: {
          cat_id: "2030",
          cat_name: "Women Clothing",
          meta_title: "",
          meta_keywords: "",
          meta_description: "",
          cat_desc: "",
          language_flag: "en",
        },
        children: [
          {
            cat_id: "1766",
            url_cat_id: "1766",
            goods_type_id: "0",
            cat_url_name: "Women Tops, Blouses & Tee",
            cat_name: "Women Tops, Blouses & Tee",
            parent_id: "2030",
            sort_order: "0",
            is_leaf: "0",
            goods_num: "0",
            multi: {
              cat_id: "1766",
              cat_name: "Women Tops, Blouses & Tee",
              meta_title: "",
              meta_keywords: "",
              meta_description: "",
              cat_desc: "",
              language_flag: "en",
            },
            children: [
              {
                cat_id: "1738",
                url_cat_id: "1738",
                goods_type_id: "0",
                cat_url_name: "Women T-Shirts",
                cat_name: "Women T-Shirts",
                parent_id: "1766",
                sort_order: "0",
                is_leaf: "1",
                goods_num: "0",
                multi: {
                  cat_id: "1738",
                  cat_name: "Women T-Shirts",
                  meta_title: "",
                  meta_keywords: "",
                  meta_description: "",
                  cat_desc: "",
                  language_flag: "en",
                },
                children: [],
              },
            ],
          },
        ],
      },
      getOtherOptions: [],
      rule_id: 0,
      sizeInfoDes: {
        multiPartFlag: 0,
        multiPartInfo: [],
        sizeInfo: [
          {
            attr_id: 87,
            attr_name: "Size",
            attr_value_id: 755,
            attr_value_name: "XS",
            attr_value_name_en: "XS",
            "Shoulder ": " 35 cm",
            "Length ": " 51 cm",
            "Sleeve Length ": " 60 cm",
            "Bust ": " 71 cm",
            "Cuff ": " 16 cm",
          },
          {
            attr_id: 87,
            attr_name: "Size",
            attr_value_id: 568,
            attr_value_name: "S",
            attr_value_name_en: "S",
            "Shoulder ": " 36 cm",
            "Length ": " 52 cm",
            "Sleeve Length ": " 61 cm",
            "Bust ": " 75 cm",
            "Cuff ": " 17 cm",
          },
          {
            attr_id: 87,
            attr_name: "Size",
            attr_value_id: 417,
            attr_value_name: "M",
            attr_value_name_en: "M",
            "Shoulder ": " 37 cm",
            "Length ": " 53 cm",
            "Sleeve Length ": " 62 cm",
            "Bust ": " 79 cm",
            "Cuff ": " 18 cm",
          },
          {
            attr_id: 87,
            attr_name: "Size",
            attr_value_id: 387,
            attr_value_name: "L",
            attr_value_name_en: "L",
            "Shoulder ": " 38.5 cm",
            "Length ": " 54 cm",
            "Sleeve Length ": " 63.2 cm",
            "Bust ": " 85 cm",
            "Cuff ": " 19.5 cm",
          },
        ],
        sizeInfoInch: [
          {
            attr_id: 87,
            attr_name: "Size",
            attr_value_id: 755,
            attr_value_name: "XS",
            attr_value_name_en: "XS",
            "Shoulder ": " 13.8 inch",
            "Length ": " 20.1 inch",
            "Sleeve Length ": " 23.6 inch",
            "Bust ": " 28 inch",
            "Cuff ": " 6.3 inch",
          },
          {
            attr_id: 87,
            attr_name: "Size",
            attr_value_id: 568,
            attr_value_name: "S",
            attr_value_name_en: "S",
            "Shoulder ": " 14.2 inch",
            "Length ": " 20.5 inch",
            "Sleeve Length ": " 24 inch",
            "Bust ": " 29.5 inch",
            "Cuff ": " 6.7 inch",
          },
          {
            attr_id: 87,
            attr_name: "Size",
            attr_value_id: 417,
            attr_value_name: "M",
            attr_value_name_en: "M",
            "Shoulder ": " 14.6 inch",
            "Length ": " 20.9 inch",
            "Sleeve Length ": " 24.4 inch",
            "Bust ": " 31.1 inch",
            "Cuff ": " 7.1 inch",
          },
          {
            attr_id: 87,
            attr_name: "Size",
            attr_value_id: 387,
            attr_value_name: "L",
            attr_value_name_en: "L",
            "Shoulder ": " 15.2 inch",
            "Length ": " 21.3 inch",
            "Sleeve Length ": " 24.9 inch",
            "Bust ": " 33.5 inch",
            "Cuff ": " 7.7 inch",
          },
        ],
        sizeUnit: 0,
        allcmFlag: 1,
        sizeInfoAttribute: [],
        basicAttribute: {
          image_url:
            "http://img.ltwebstatic.com/images3_pi/2021/02/20/16137845242755b0c67e125b491c12a986b528417a.jpg",
          attribute_info: [
            {
              name: "Your bust",
              sort: 1,
              desc: "Measure the circumference over the fullest part of your bust.",
            },
            {
              name: "Your waist",
              sort: 2,
              desc: "Measure your waist at the thinnest place.\n",
            },
            {
              name: "Your hips",
              sort: 3,
              desc: "Measure the fullest part of your hips.\n",
            },
          ],
          base_code_info: [
            {
              size: "XS",
              Bust: "82-86 cm",
              "Waist Size": "62-66 cm",
              "Hip Size": "87-91 cm",
            },
            {
              size: "S",
              Bust: "86-90 cm",
              "Waist Size": "66-70 cm",
              "Hip Size": "91-95 cm",
            },
            {
              size: "M",
              Bust: "90-94 cm",
              "Waist Size": "70-74 cm",
              "Hip Size": "95-99 cm",
            },
            {
              size: "L",
              Bust: "94-100 cm",
              "Waist Size": "74-80 cm",
              "Hip Size": "99-105 cm",
            },
          ],
          base_code_info_inch: [
            {
              size: "XS",
              Bust: "32.3-33.9 inch",
              "Waist Size": "24.4-26 inch",
              "Hip Size": "34.3-35.8 inch",
            },
            {
              size: "S",
              Bust: "33.9-35.4 inch",
              "Waist Size": "26-27.6 inch",
              "Hip Size": "35.8-37.4 inch",
            },
            {
              size: "M",
              Bust: "35.4-37 inch",
              "Waist Size": "27.6-29.1 inch",
              "Hip Size": "37.4-39 inch",
            },
            {
              size: "L",
              Bust: "37-39.4 inch",
              "Waist Size": "29.1-31.5 inch",
              "Hip Size": "39-41.3 inch",
            },
          ],
          base_code_info_other: [],
          base_code_show_mode: 0,
        },
        braRecommendSize: [],
      },
      mallCode: "1",
      mallStock: 999,
      showMallSite: false,
    },
  },
};
