const { PrismaClient } = require('../generated/prisma')

const prisma = new PrismaClient()

exports.getAllTravels = async (req, res) => {
  try {
    const travels = await prisma.travel_tb.findMany({
      include: {
        user: {
          select: {
            userId: true,
            userName: true,
            userImage: true
          }
        },
        comments: true // หรือไม่ใส่ถ้าไม่ต้องการ
      },
    });

    res.json(travels);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch travels' });
  }
  

};

exports.getTravelById = async (req, res) => {
    const { travelId } = req.params;
  
    try {
      const travel = await prisma.travel_tb.findUnique({
        where: { travelId: parseInt(travelId) },
        include: {
          user: {
            select: {
              userId: true,
              userName: true,
              userImage: true
            }
          },
          comments: {
            include: {
              user: {
                select: {
                  userId: true,
                  userName: true,
                  userImage: true
                }
              }
            }
          }
        }
      });
  
      if (!travel) {
        return res.status(404).json({ message: 'Travel not found' });
      }
  
      res.json(travel);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Failed to fetch travel detail' });
    }
  };

  // สร้างโพสต์ใหม่
  exports.createTravel = async (req, res) => {
    const { userId, travelPlace, travelLocation } = req.body;
    const travelImage = req.file ? req.file.path : '';
  
    try {
      const newTravel = await prisma.travel_tb.create({
        data: {
          userId: parseInt(userId),
          travelPlace,
          travelLocation,
          travelImage,
        },
      });
      res.status(201).json(newTravel);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to create travel" });
    }
  };
  
  
  //  แก้ไขโพสต์
  exports.updateTravel = async (req, res) => {
    const { travelId } = req.params;
    const { travelPlace, travelLocation } = req.body;
    const travelImage = req.file ? req.file.path : undefined;
  
    const updateData = {
      travelPlace,
      travelLocation,
    };
  
    if (travelImage) {
      updateData.travelImage = travelImage;
    }
  
    try {
      const updatedTravel = await prisma.travel_tb.update({
        where: { travelId: parseInt(travelId) },
        data: updateData,
      });
      res.json(updatedTravel);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to update travel" });
    }
  };
  
  
  //  ลบโพสต์
  exports.deleteTravel = async (req, res) => {
    const { travelId } = req.params;
  
    try {
      await prisma.travel_tb.delete({
        where: { travelId: parseInt(travelId) }
      });
      res.json({ message: "Travel deleted successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to delete travel" });
    }
  };
  exports.createComment = async (req, res) => {
    const { travelId } = req.params;
    const { userId, content } = req.body;
  
    try {
      const newComment = await prisma.comment.create({
        data: {
          travelId: parseInt(travelId),
          userId: parseInt(userId),
          content,
        },
      });
  
      res.status(201).json(newComment);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Failed to create comment' });
    }
  };
  

  exports.deleteComment = async (req, res) => {
    const { commentId } = req.params; 
  
    try {
      const existing = await prisma.comment.findUnique({
        where: { id: parseInt(commentId) } 
      });
  
      if (!existing) {
        return res.status(404).json({ message: 'Comment not found' });
      }
  
      await prisma.comment.delete({
        where: { id: parseInt(commentId) } 
      });
  
      res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (err) {
      console.error('❌ Failed to delete comment:', err);
      res.status(500).json({ message: 'Failed to delete comment' });
    }
  };
  
//แก้ไข comment
  exports.updateComment = async (req, res) => {
    const { commentId } = req.params;
    const { content } = req.body;
  
    if (!content || content.trim() === '') {
      return res.status(400).json({ message: 'Content is required' });
    }
  
    try {
      const existing = await prisma.comment.findUnique({
        where: { id: parseInt(commentId) },
      });
  
      if (!existing) {
        return res.status(404).json({ message: 'Comment not found' });
      }
  
      const updated = await prisma.comment.update({
        where: { id: parseInt(commentId) },
        data: { content },
      });
  
      res.status(200).json(updated);
    } catch (err) {
      console.error('❌ Failed to update comment:', err);
      res.status(500).json({ message: 'Failed to update comment' });
    }
  };