const test=require('node:test'); const assert=require('node:assert/strict'); const {orderDocument}=require('../src/model');
test('order document keeps aggregate data together',()=>{const o=orderDocument({orderId:'o1',customerId:'c1',items:[{sku:'sku-1',price:100}]}); assert.equal(o.status,'created'); assert.equal(o.items.length,1);});
