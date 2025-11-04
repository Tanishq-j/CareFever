const express = require("express");
const { db } = require("../config/firebase");
const { Webhook } = require("svix");

const userClerkController = async (req, res) => {
    try {
        // Get the raw body as a string
        const rawBody = JSON.stringify(req.body);
        // console.log('Raw body:', rawBody);
        
        const headers = req.headers;

        const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
        const evt = wh.verify(rawBody, {
            "svix-id": headers["svix-id"],
            "svix-timestamp": headers["svix-timestamp"],
            "svix-signature": headers["svix-signature"],
        });

        const {
            id,
            email_addresses,
            first_name,
            last_name,
            created_at,
            updated_at,
            image_url,
        } = evt.data;

        switch (evt.type) {
            case "user.created":
                await db
                    .collection("users")
                    .doc(id)
                    .set({
                        email: email_addresses[0].email_address,
                        firstName: first_name || "",
                        lastName: last_name || "",
                        clerkUserId: id,
                        imageUrl: image_url || "",
                        createdAt: created_at,
                    });
                break;

            case "user.updated":
                await db
                    .collection("users")
                    .doc(id)
                    .update({
                        email: email_addresses[0].email_address,
                        firstName: first_name || "",
                        lastName: last_name || "",
                        imageUrl: image_url || "",
                        updatedAt: updated_at,
                    });
                break;

            case "user.deleted":
                await db.collection("users").doc(id).delete();
                break;

            default:
                console.log("Unhandled event type:", evt.type);
        }

        res.status(200).json({ success: true });
    } catch (err) {
        console.error("Webhook error details:", {
            message: err.message,
            stack: err.stack,
            headers: req.headers,
        });
        res.status(400).json({
            error: "Webhook verification failed",
            details: err.message,
        });
    }
};

module.exports = {
    userClerkController,
};
