function customerOrders(collection, customerId, limit=20, before) {
  const filter={customerId};
  if(before) filter.createdAt={$lt:new Date(before)};
  return collection.find(filter).sort({createdAt:-1,_id:-1}).limit(limit).toArray();
}
function orderSummary(collection) { return collection.aggregate([{$group:{_id:'$status',count:{$sum:1},value:{$sum:{$sum:'$items.price'}}}}]).toArray(); }
module.exports={customerOrders,orderSummary};
