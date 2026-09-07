function orderDocument({orderId, customerId, items}) {
  return { orderId, customerId, items, status:'created', createdAt:new Date() };
}
function indexes(collection) { return collection.createIndexes([{key:{customerId:1,createdAt:-1}},{key:{status:1,createdAt:-1}}]); }
module.exports={orderDocument,indexes};
