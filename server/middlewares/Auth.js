// Middleware to check userID and hasPremiumPlan
import { clerkClient } from "@clerk/express";

export const auth = async (req, res, next)=>{
    try {
        const auth = req.auth;  // from clerkMiddleware

        if(!auth || !auth.userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized: missing or invalid Clerk token",
            });
        }
        const {userId, has} = auth;

        // Check if user has the Premium plan (key: 'premium')
        const hasPremiumPlan = await has({ plan: 'premium' });

        const user = await clerkClient.users.getUser(userId);

        // Track free usage in privateMetadata.free_usage
        if(!hasPremiumPlan && user.privateMetadata.free_usage) {
            req.free_usage = user.privateMetadata.free_usage;
        } else {
            await clerkClient.users.updateUserMetadata(userId, {
                privateMetadata: {
                    free_usage: 0,
                },
            });
            req.free_usage = 0;
        }

        // Attach plan info to request
        req.plan = hasPremiumPlan ? 'premium' : 'free';
        next();
    } catch (error) {
        console.error("Auth middleware error:", error);
        res.status(500).json({ success : false , message: error.message});
    }
};