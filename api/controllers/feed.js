const status = require('../../utilities/server_status');
const feedModel = require('../models/feed');

const QUERY_DEFAULT_PAGE = 0;
const QUERY_DEFAULT_PAGE_SIZE = 3;
const QUERY_MAX_COUNT = 3;

exports.getUserFeed = (req, res) => {
    const id = req.query.id;
    //var roomId = req.query.questionId;
    var page = req.query.page;
    var page_size = req.query.page_size;
    var userId = req.query.userId;
    var roomId = req.query.roomId;

    //var questionId = req.query.roomId;
    //var roomid = req.query.roommId;


    if (page == null) {
        page = QUERY_DEFAULT_PAGE;
    }

    if (page_size == null || page_size > QUERY_MAX_COUNT) {
        page_size = QUERY_DEFAULT_PAGE_SIZE;
    }

    if (userId == null && roomId == null ) {
        userId = 0;
       roomId =0 
    }

  

    const offset = page * page_size;

    const args = [userId,roomId, id, parseInt(page_size), parseInt(offset)]
    feedModel.getUserFeed(args).then(result => {
        res.status(status.OK).json(result);
    })
};
/*
exports.getBestFeed = (req, res) => {
    const id = req.parms.id;
    //var roomId = req.query.questionId;

    var page = req.parms.page;
    var page_size = req.parms.page_size;
    var roomId = req.parms.roomId;

    //var questionId = req.query.roomId;
    //var roomid = req.query.roommId;


    if (page == null) {
        page = QUERY_DEFAULT_PAGE;
    }

    if (page_size == null || page_size > QUERY_MAX_COUNT) {
        page_size = QUERY_DEFAULT_PAGE_SIZE;
    }

    if (roomId == null ) {
       roomId =0 
    }

    const offset = page * page_size;

    const args = [roomId, id, parseInt(page_size), parseInt(offset)]
    feedModel.getBestFeed(args).then(result => {
        res.status(status.OK).json(result);
    })
};
*/

exports.getBestFeed = (req, res) => {
    const id = req.params.roomId;
    feedModel.getBestFeed(id).then(result => {
        if (result) {
            res.status(status.OK).json(result[1]);
        } else {
            res.status(status.BAD_REQUEST).json({
                message: "Invalid ID"
            });
        }
    });
};

exports.getHomeFeed = (req, res) => {
    const id = req.query.id;
    var page = req.query.page;
    var page_size = req.query.page_size;

    if (page == null) {
        page = QUERY_DEFAULT_PAGE;
    }

    if (page_size == null || page_size > QUERY_MAX_COUNT) {
        page_size = QUERY_DEFAULT_PAGE_SIZE;
    }

    const offset = page * page_size;

    const args = [id, id, parseInt(page_size), parseInt(offset)]
    feedModel.getHomeFeed(args).then(result => {
        res.status(status.OK).json(result);
    })
};