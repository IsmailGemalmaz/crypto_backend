"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Wallet_1 = require("../../controller/CryptoTransection/Wallet");
//import {Users} from '../../controller/CryptoTransection/Wallet';
var router = express_1.Router();
var wallet = new Wallet_1.Wallet;
router.post("/postwallet", wallet.createWallet);
exports.default = router;
